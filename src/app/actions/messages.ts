"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

async function verifyAdmin() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  return session.user;
}

const isDatabaseMode = () => process.env.USE_DATABASE === "true";

export interface ContactMessageData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

let mockMessages: ContactMessageData[] = [
  {
    id: "mock-msg-1",
    firstName: "Rohan",
    lastName: "Sharma",
    email: "rohan@example.com",
    subject: "Admissions",
    message: "I would like to inquire about the admission process for Grade 6.",
    createdAt: new Date()
  },
  {
    id: "mock-msg-2",
    firstName: "Priya",
    lastName: "Patel",
    email: "priya@example.com",
    subject: "General Inquiry",
    message: "What are the school hours for the primary section?",
    createdAt: new Date(Date.now() - 3600000)
  }
];

export async function getMessageIds(): Promise<string[]> {
  try {
    await verifyAdmin();

    if (!isDatabaseMode()) {
      return mockMessages.map(m => m.id);
    }

    const messages = await prisma.contactMessage.findMany({
      select: { id: true },
      orderBy: { createdAt: "desc" }
    });
    
    return messages.map((m) => m.id);
  } catch (error) {
    console.error("Failed to get message ids:", error);
    return [];
  }
}

export async function getMessages(): Promise<ContactMessageData[]> {
  try {
    await verifyAdmin();

    if (!isDatabaseMode()) {
      return mockMessages;
    }

    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" }
    });
    
    return messages;
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return [];
  }
}

export async function deleteMessage(id: string) {
  try {
    await verifyAdmin();

    if (!isDatabaseMode()) {
      mockMessages = mockMessages.filter(m => m.id !== id);
    } else {
      await prisma.contactMessage.delete({
        where: { id }
      });
    }

    revalidatePath("/admin/messages");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete message:", error);
    return { success: false, error: "Failed to delete message. Please try again." };
  }
}
