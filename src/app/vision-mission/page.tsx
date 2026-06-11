import VisionMissionClient from "./VisionMissionClient";
import { getSectionContentVisual } from "@/lib/visual-cms-actions";
import { auth } from "@/auth";

export const metadata = {
  title: "Vision & Mission | Manka Public School",
  description: "Our mission for total education and vision for shaping noble souls.",
};

export default async function VisionMissionPage() {
  const session = await auth();
  const isAdmin = session?.user?.role === "ADMIN" || session?.user?.role === "SUPER_ADMIN" || session?.user?.role === "CONTENT_MANAGER";

  const contentStr = await getSectionContentVisual("vision-mission-page", "{}", isAdmin);
  let content = {};
  try { content = JSON.parse(contentStr); } catch (e) {}

  return <VisionMissionClient content={content} />;
}
