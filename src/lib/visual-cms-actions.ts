"use server";

import { prisma } from "./prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

async function verifyAdmin() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  return session.user;
}

export async function saveTextDraft(sectionSlug: string, field: string, value: string) {
  const user = await verifyAdmin();
  const useDatabase = process.env.USE_DATABASE === "true";
  
  if (!useDatabase) return { success: true };

  try {
    // 1. Get the current section
    let section = await prisma.websiteSection.findUnique({
      where: { slug: sectionSlug }
    });

    if (!section) {
      // Create it if it doesn't exist
      section = await prisma.websiteSection.create({
        data: {
          slug: sectionSlug,
          name: sectionSlug.replace("-", " "),
          content: "{}",
          draftContent: "{}"
        }
      });
    }

    // 2. Parse existing draft (or fall back to published content)
    let draftData: any = {};
    try {
      draftData = JSON.parse(section.draftContent || section.content || "{}");
    } catch (e) {
      draftData = {};
    }

    // 3. Update the specific field
    draftData[field] = value;

    // 4. Save back to draftContent
    await prisma.websiteSection.update({
      where: { id: section.id },
      data: { draftContent: JSON.stringify(draftData) }
    });

    return { success: true };
  } catch (error) {
    console.error("Error saving draft:", error);
    return { success: false, error: "Failed to save draft" };
  }
}

export async function publishAllDrafts() {
  const user = await verifyAdmin();
  const useDatabase = process.env.USE_DATABASE === "true";
  
  if (!useDatabase) {
    revalidatePath("/", "layout");
    return { success: true };
  }

  try {
    // Publish Website Sections
    const sectionsWithDrafts = await prisma.websiteSection.findMany({
      where: { draftContent: { not: null } }
    });

    for (const section of sectionsWithDrafts) {
      if (section.draftContent) {
        await prisma.websiteSection.update({
          where: { id: section.id },
          data: { 
            content: section.draftContent,
            draftContent: null, // clear draft
            isPublished: true
          }
        });

        // Save to version history
        await prisma.contentVersion.create({
          data: {
            sectionId: section.id,
            content: section.draftContent,
            createdBy: user.id || "system"
          }
        });
      }
    }

    // Publish Images
    await prisma.galleryImage.updateMany({
      where: { isDraft: true },
      data: { isDraft: false }
    });

    // You can add Publishing logic for Events, Notices, Faculty here...

    try {
      await prisma.auditLog.create({
        data: {
          adminId: user.id || "",
          action: "PUBLISH_ALL",
          details: "Published all draft changes to the live site."
        }
      });
    } catch (auditError) {
      console.warn("Could not create audit log:", auditError);
    }

    revalidatePath("/", "layout");
    return { success: true };
  } catch (error) {
    console.error("Error publishing drafts:", error);
    return { success: false, error: "Failed to publish changes" };
  }
}

import { supabase } from "./supabase";

// Fetch helper for Server Components to get the correct content (draft if admin, otherwise published)
export async function getSectionContentVisual(slug: string, defaultValue: string, isAdmin: boolean) {
  const useDatabase = process.env.USE_DATABASE === "true";
  if (!useDatabase) return defaultValue;

  try {
    const section = await prisma.websiteSection.findUnique({
      where: { slug }
    });

    if (!section) return defaultValue;

    // If admin is viewing, they should see the draft if it exists, otherwise the published content
    if (isAdmin && section.draftContent) {
      return section.draftContent;
    }

    return section.content || defaultValue;
  } catch (error) {
    return defaultValue;
  }
}

export async function uploadImageToSupabase(formData: FormData) {
  await verifyAdmin();
  const file = formData.get("file") as File;
  
  if (!file) return { success: false, error: "No file provided" };
  
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    // Convert Web File object to Buffer for server-side Supabase upload compatibility
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { data, error } = await supabase.storage
      .from('images')
      .upload(filePath, buffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;

    const { data: publicUrlData } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    return { success: true, url: publicUrlData.publicUrl };
  } catch (error: any) {
    console.error("Error uploading image:", error);
    return { success: false, error: error.message || "Upload failed" };
  }
}
