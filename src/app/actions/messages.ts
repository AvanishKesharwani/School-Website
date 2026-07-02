"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

async function verifyAdmin() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  return session.user;
}

const isDatabaseMode = () => process.env.USE_DATABASE === "true";

export async function getMessageIds(): Promise<string[]> {
  try {
    await verifyAdmin();

    if (!isDatabaseMode()) {
      return ["mock-msg-1", "mock-msg-2"];
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
