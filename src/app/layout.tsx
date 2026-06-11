import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { auth } from "@/auth";
import { EditModeProvider } from "@/components/cms/EditModeProvider";
import CMSToolbar from "@/components/cms/CMSToolbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manka Public School Champa",
  description: "Building Futures. Inspiring Excellence. Empowering students with knowledge, character, creativity, and confidence.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const isAdmin = session?.user?.role === "ADMIN" || session?.user?.role === "SUPER_ADMIN" || session?.user?.role === "CONTENT_MANAGER";

  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased bg-brand-white`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <EditModeProvider initialIsAdmin={isAdmin}>
          <SmoothScroll>{children}</SmoothScroll>
          {isAdmin && <CMSToolbar />}
        </EditModeProvider>
      </body>
    </html>
  );
}
