import CareersClient from "./CareersClient";
import { getSectionContentVisual } from "@/lib/visual-cms-actions";
import { auth } from "@/auth";

export const metadata = {
  title: "Careers | Manka Public School",
  description: "Work with us and shape the future at Manka Public School.",
};

export default async function CareersPage() {
  const session = await auth();
  const isAdmin = session?.user?.role === "ADMIN" || session?.user?.role === "SUPER_ADMIN" || session?.user?.role === "CONTENT_MANAGER";

  const contentStr = await getSectionContentVisual("careers-page", "{}", isAdmin);
  let content = {};
  try { content = JSON.parse(contentStr); } catch (e) {}

  return <CareersClient content={content} />;
}
