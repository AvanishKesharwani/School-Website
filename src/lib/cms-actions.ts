"use server";

import { auth } from "@/auth";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";
import { supabase } from "./supabase";

// Verify admin permissions
async function verifyAdmin() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  return session.user;
}

// In-memory mock storage for local testing when USE_DATABASE=false
const MOCK_DB: Record<string, any> = {
  "homepage-hero": JSON.stringify({
    title: "Building Futures.<br />Inspiring Excellence.",
    subtitle: "Empowering students with knowledge, character, creativity, and confidence.",
  }),
  "contact-info": { 
    schoolName: "Manka Public School", 
    address: "Champa, Chhattisgarh", 
    phone: "+91 99816 72985", 
    email: "mpscph2008@gmail.com",
    website: "www.mankapublicschool.edu"
  },
  "admission-info": {
    academicYear: "2026-27",
    admissionOpen: true,
    classesAvailable: "Nursery to Class 12",
    admissionProcess: "Submit form online, followed by interview.",
    requiredDocuments: "Aadhaar Card, Previous Marksheet, Photos",
  }
};

export async function getSectionContent(slug: string, defaultValue: string) {
  const useDatabase = process.env.USE_DATABASE === "true";

  if (!useDatabase) {
    return typeof MOCK_DB[slug] === "string" ? MOCK_DB[slug] : JSON.stringify(MOCK_DB[slug] || defaultValue);
  }

  try {
    const section = await prisma.websiteSection.findUnique({
      where: { slug }
    });
    return section?.content || defaultValue;
  } catch (error) {
    console.error("Error fetching section content:", error);
    return defaultValue;
  }
}

export async function updateSectionContent(slug: string, name: string, content: string) {
  const user = await verifyAdmin();
  const useDatabase = process.env.USE_DATABASE === "true";

  if (!useDatabase) {
    MOCK_DB[slug] = content;
    revalidatePath("/");
    return { success: true };
  }
  
  try {
    const section = await prisma.websiteSection.upsert({
      where: { slug },
      update: { content, isPublished: true },
      create: { slug, name, content, isPublished: true }
    });

    await prisma.contentVersion.create({
      data: { sectionId: section.id, content, createdBy: user.id || "system" }
    });

    await prisma.auditLog.create({
      data: { adminId: user.id || "", action: "UPDATE_SECTION", section: slug, details: `Updated ${name}` }
    });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error updating section:", error);
    return { success: false, error: "Failed to update content" };
  }
}

// ----------------- Contact Info CMS -----------------
export async function getContactInfo() {
  const useDatabase = process.env.USE_DATABASE === "true";
  if (!useDatabase) return MOCK_DB["contact-info"];

  try {
    const info = await prisma.contactInfo.findFirst();
    return info || MOCK_DB["contact-info"];
  } catch (error) {
    console.error("Error fetching contact info", error);
    return MOCK_DB["contact-info"];
  }
}

export async function updateContactInfo(data: any) {
  const user = await verifyAdmin();
  const useDatabase = process.env.USE_DATABASE === "true";

  if (!useDatabase) {
    MOCK_DB["contact-info"] = data;
    revalidatePath("/");
    return { success: true };
  }

  try {
    const existing = await prisma.contactInfo.findFirst();
    if (existing) {
      await prisma.contactInfo.update({ where: { id: existing.id }, data });
    } else {
      await prisma.contactInfo.create({ data });
    }

    await prisma.auditLog.create({
      data: { adminId: user.id || "", action: "UPDATE_CONTACT", section: "ContactInfo" }
    });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error updating contact info", error);
    return { success: false, error: "Failed to update" };
  }
}

// ----------------- Admissions CMS -----------------
export async function getAdmissionsInfo() {
  const useDatabase = process.env.USE_DATABASE === "true";
  if (!useDatabase) return MOCK_DB["admission-info"];

  try {
    const info = await prisma.admission.findFirst();
    return info || MOCK_DB["admission-info"];
  } catch (error) {
    console.error("Error fetching admission info", error);
    return MOCK_DB["admission-info"];
  }
}

export async function updateAdmissionsInfo(data: any) {
  const user = await verifyAdmin();
  const useDatabase = process.env.USE_DATABASE === "true";

  if (!useDatabase) {
    MOCK_DB["admission-info"] = data;
    revalidatePath("/");
    return { success: true };
  }

  try {
    const existing = await prisma.admission.findFirst();
    if (existing) {
      await prisma.admission.update({ where: { id: existing.id }, data });
    } else {
      await prisma.admission.create({ data });
    }

    await prisma.auditLog.create({
      data: { adminId: user.id || "", action: "UPDATE_ADMISSIONS", section: "Admissions" }
    });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Error updating admission info", error);
    return { success: false, error: "Failed to update" };
  }
}

export async function uploadDisclosureFile(formData: FormData) {
  try {
    await verifyAdmin();
    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Sanitize filename to avoid filesystem/URL issues
    const safeName = file.name
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9.\-_]/g, "");
    const uniqueFilename = `${Date.now()}-${safeName}`;

    // 1. Attempt to upload to Supabase Storage
    try {
      const { data, error } = await supabase.storage
        .from("documents")
        .upload(uniqueFilename, buffer, {
          contentType: file.type,
          duplex: "half",
        });

      if (!error) {
        const { data: urlData } = supabase.storage
          .from("documents")
          .getPublicUrl(uniqueFilename);

        if (urlData?.publicUrl) {
          return { success: true, url: urlData.publicUrl };
        }
      } else {
        console.warn("Supabase storage upload failed, trying fallback:", error.message);
      }
    } catch (sbError) {
      console.warn("Supabase upload exception, trying fallback:", sbError);
    }

    // 2. Fallback: Write locally (works in local dev, but not in Vercel prod)
    try {
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      await fs.mkdir(uploadDir, { recursive: true });
      const filePath = path.join(uploadDir, uniqueFilename);
      await fs.writeFile(filePath, buffer);
      const fileUrl = `/uploads/${uniqueFilename}`;
      return { success: true, url: fileUrl };
    } catch (fsError: any) {
      console.error("Local filesystem write failed:", fsError);
      return { 
        success: false, 
        error: "Supabase upload failed, and server filesystem is read-only. Please create a public bucket named 'documents' in your Supabase Dashboard." 
      };
    }
  } catch (error: any) {
    console.error("File upload error:", error);
    return { success: false, error: error.message || "Failed to upload file." };
  }
}
