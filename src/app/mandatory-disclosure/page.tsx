import { auth } from "@/auth";
import MandatoryDisclosureClient from "./MandatoryDisclosureClient";

export const metadata = {
  title: "Mandatory Public Disclosure | Manka Public School",
  description: "CBSE Mandatory Public Disclosure details, certificates, results, staff and infrastructure details for Manka Public School.",
};

export default async function MandatoryDisclosurePage() {
  const session = await auth();
  const isAdmin = !!session?.user;
  return <MandatoryDisclosureClient isAdmin={isAdmin} />;
}
