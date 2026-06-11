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

export async function getGalleryImages() {
  const useDatabase = process.env.USE_DATABASE === "true";
  
  if (!useDatabase) {
    return [
      { id: "1", category: "Campus", src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2069&auto=format&fit=crop", aspect: "aspect-[4/3]" },
      { id: "2", category: "Events", src: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=2070&auto=format&fit=crop", aspect: "aspect-[3/4]" },
    ];
  }

  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return images;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
}

export async function addGalleryImage({ src, category, aspect = "aspect-square" }: { src: string, category: string, aspect?: string }) {
  await verifyAdmin();
  const useDatabase = process.env.USE_DATABASE === "true";
  if (!useDatabase) return { success: true };

  if (!src || !category) {
    return { success: false, error: "Image URL and Category are required" };
  }

  try {
    const newImage = await prisma.galleryImage.create({
      data: { src, category, aspect }
    });
    
    revalidatePath("/");
    revalidatePath("/gallery");
    revalidatePath("/admin/media");
    return { success: true, image: newImage };
  } catch (error) {
    console.error("Error adding gallery image:", error);
    return { success: false, error: "Failed to add image" };
  }
}

export async function deleteGalleryImage(id: string) {
  await verifyAdmin();
  const useDatabase = process.env.USE_DATABASE === "true";
  if (!useDatabase) return { success: true };

  try {
    await prisma.galleryImage.delete({ where: { id } });
    
    revalidatePath("/");
    revalidatePath("/gallery");
    revalidatePath("/admin/media");
    return { success: true };
  } catch (error) {
    console.error("Error deleting gallery image:", error);
    return { success: false, error: "Failed to delete image" };
  }
}
