"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    formData.append("redirectTo", "/admin");
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      console.error("AuthError caught in signin action:", error);
      // Try to get a specific inner error message if available
      // @ts-ignore
      const innerMessage = error.cause?.err?.message || error.message;
      if (innerMessage) {
        return `Authentication error: ${innerMessage}`;
      }
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
