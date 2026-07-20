"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function logStorageAction(action: string, details: string) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, error: "Unauthorized" };
    }

    const useDatabase = process.env.USE_DATABASE === "true";
    if (!useDatabase) {
      console.log(`[Mock Audit Log] User ${session.user.name} performed ${action}: ${details}`);
      return { success: true };
    }

    await prisma.auditLog.create({
      data: {
        adminId: session.user.id,
        action,
        section: "documents",
        details,
      },
    });

    return { success: true };
  } catch (error: any) {
    console.error("Failed to log storage action:", error);
    return { success: false, error: error.message || "Failed to log action" };
  }
}
