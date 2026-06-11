import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/admin/signin",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminRoute = nextUrl.pathname.startsWith("/admin");
      
      // If the route is an admin route (but not the signin page itself)
      if (isAdminRoute && nextUrl.pathname !== "/admin/signin") {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname === "/admin/signin") {
        return Response.redirect(new URL("/", nextUrl));
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        // @ts-ignore
        token.role = user.role;
        // @ts-ignore
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user && token.role) {
        // @ts-ignore
        session.user.role = token.role as string;
        // @ts-ignore
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
