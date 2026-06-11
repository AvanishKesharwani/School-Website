"use server";

import { prisma } from "@/lib/prisma";

export async function submitContactMessage(prevState: any, formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!firstName || !lastName || !email || !subject || !message) {
      return { success: false, error: "All fields are required." };
    }

    const useDatabase = process.env.USE_DATABASE === "true";
    if (!useDatabase) {
      console.log("Mock submission:", { firstName, lastName, email, subject, message });
      return { success: true };
    }

    await prisma.contactMessage.create({
      data: {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit contact message:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}

export async function submitAdmissionInquiry(prevState: any, formData: FormData) {
  try {
    const parentName = formData.get("parentName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const studentName = formData.get("studentName") as string;
    const grade = formData.get("grade") as string;

    if (!parentName || !phone || !email || !studentName || !grade) {
      return { success: false, error: "All fields are required." };
    }

    const message = `Phone: ${phone}\nStudent Name: ${studentName}\nGrade Applying For: ${grade}`;

    const useDatabase = process.env.USE_DATABASE === "true";
    if (!useDatabase) {
      console.log("Mock admission inquiry:", { parentName, email, message });
      return { success: true };
    }

    await prisma.contactMessage.create({
      data: {
        firstName: parentName,
        lastName: "(Parent)",
        email,
        subject: "Admission Inquiry",
        message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit admission inquiry:", error);
    return { success: false, error: "Failed to send inquiry. Please try again later." };
  }
}
