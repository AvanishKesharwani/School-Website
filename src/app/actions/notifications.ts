"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export interface NoticeData {
  id: string;
  title: string;
  content: string;
  date: Date;
  isDraft: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// In-memory cache for mock database mode
let mockNotices: NoticeData[] = [
  {
    id: "mock-1",
    title: "Admissions Open for Academic Year 2026-27",
    content: "Manka Public School is pleased to announce that registrations for the upcoming academic year are now open. Apply online today!",
    date: new Date(Date.now() - 2 * 3600 * 1000),
    isDraft: false,
    createdAt: new Date(Date.now() - 2 * 3600 * 1000),
    updatedAt: new Date(Date.now() - 2 * 3600 * 1000),
  },
  {
    id: "mock-2",
    title: "Annual Sports Meet Rescheduled",
    content: "Due to forecasted rain, the Annual Sports Meet has been rescheduled to Friday, October 16th. Timings remain the same.",
    date: new Date(Date.now() - 24 * 3600 * 1000),
    isDraft: false,
    createdAt: new Date(Date.now() - 24 * 3600 * 1000),
    updatedAt: new Date(Date.now() - 24 * 3600 * 1000),
  },
  {
    id: "mock-3",
    title: "Parent-Teacher Meeting (PTM) Scheduled",
    content: "The second term PTM for classes Pre-Primary to XII is scheduled for Saturday, October 10th. Check details for slot timings.",
    date: new Date(Date.now() - 3 * 24 * 3600 * 1000),
    isDraft: false,
    createdAt: new Date(Date.now() - 3 * 24 * 3600 * 1000),
    updatedAt: new Date(Date.now() - 3 * 24 * 3600 * 1000),
  }
];

async function verifyAdmin() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  return session.user;
}

const isDatabaseMode = () => process.env.USE_DATABASE === "true";

export async function getNotifications(): Promise<NoticeData[]> {
  try {
    if (!isDatabaseMode()) {
      return mockNotices.filter(n => !n.isDraft).sort((a, b) => b.date.getTime() - a.date.getTime());
    }
    const notices = await prisma.notice.findMany({
      where: { isDraft: false },
      orderBy: { date: "desc" }
    });
    return notices;
  } catch (error) {
    console.error("Failed to get notifications:", error);
    return [];
  }
}

export async function getAllAdminNotices(): Promise<NoticeData[]> {
  try {
    await verifyAdmin();

    if (!isDatabaseMode()) {
      return [...mockNotices].sort((a, b) => b.date.getTime() - a.date.getTime());
    }
    const notices = await prisma.notice.findMany({
      orderBy: { date: "desc" }
    });
    return notices;
  } catch (error) {
    console.error("Failed to get admin notices:", error);
    return [];
  }
}

export async function createNotification(prevState: any, formData: FormData) {
  try {
    const user = await verifyAdmin();

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const isDraft = formData.get("isDraft") === "true";

    if (!title || !content) {
      return { success: false, error: "Title and Content are required." };
    }

    if (!isDatabaseMode()) {
      const newNotice: NoticeData = {
        id: `mock-${Date.now()}`,
        title,
        content,
        date: new Date(),
        isDraft,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockNotices.unshift(newNotice);
    } else {
      const adminId = user.id;
      
      await prisma.$transaction(async (tx) => {
        const notice = await tx.notice.create({
          data: {
            title,
            content,
            isDraft,
          },
        });

        if (adminId) {
          await tx.auditLog.create({
            data: {
              adminId,
              action: isDraft ? "CREATE_DRAFT_NOTICE" : "PUBLISH_NOTICE",
              section: "notifications",
              details: `Created notice: ${title}`
            }
          });
        }
      });
    }

    revalidatePath("/admin/notifications");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to create notification:", error);
    return { success: false, error: "Failed to create notice. Please try again." };
  }
}

export async function deleteNotification(id: string) {
  try {
    const user = await verifyAdmin();

    if (!isDatabaseMode()) {
      mockNotices = mockNotices.filter(n => n.id !== id);
    } else {
      const adminId = user.id;
      
      await prisma.$transaction(async (tx) => {
        const notice = await tx.notice.delete({
          where: { id },
        });

        if (adminId) {
          await tx.auditLog.create({
            data: {
              adminId,
              action: "DELETE_NOTICE",
              section: "notifications",
              details: `Deleted notice: ${notice.title}`
            }
          });
        }
      });
    }

    revalidatePath("/admin/notifications");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete notification:", error);
    return { success: false, error: "Failed to delete notice. Please try again." };
  }
}
