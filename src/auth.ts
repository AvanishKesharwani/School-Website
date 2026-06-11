import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const useDatabase = process.env.USE_DATABASE === "true";

        if (!useDatabase) {
          // Mock Admin Login for when database is disconnected
          if (
            credentials.email === "admin@mankapublicschool.edu" &&
            credentials.password === "admin"
          ) {
            return {
              id: "mock-admin-id",
              name: "System Admin",
              email: "admin@mankapublicschool.edu",
              role: "SUPER_ADMIN",
            };
          }
          return null;
        }

        // Database flow
        try {
          const user = await prisma.adminUser.findFirst({
            where: {
              OR: [
                { email: credentials.email as string },
                { username: credentials.email as string }
              ]
            },
          });

          if (!user || !user.passwordHash) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(
            credentials.password as string,
            user.passwordHash
          );

          if (passwordsMatch) {
            return { id: user.id, name: user.username, email: user.email, role: user.role };
          }
        } catch (error) {
          console.error("Database authentication error:", error);
        }

        return null;
      },
    }),
  ],
});
