import AboutClient from "./AboutClient";
import { getSectionContentVisual } from "@/lib/visual-cms-actions";
import { auth } from "@/auth";

export const metadata = {
  title: "About Us | Manka Public School",
  description: "Learn about Manka Public School's legacy, values, and vision.",
};

export default async function AboutPage() {
  const session = await auth();
  const isAdmin = session?.user?.role === "ADMIN" || session?.user?.role === "SUPER_ADMIN" || session?.user?.role === "CONTENT_MANAGER";

  const contentStr = await getSectionContentVisual("about-us-page", "{}", isAdmin);
  let content = {};
  try { content = JSON.parse(contentStr); } catch (e) {}

  return <AboutClient content={content} />;
}
