import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HallOfFame from "@/components/HallOfFame";
import Academics from "@/components/Academics";
import WhyChooseUs from "@/components/WhyChooseUs";
import StudentLife from "@/components/StudentLife";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { getSectionContentVisual } from "@/lib/visual-cms-actions";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  const isAdmin = session?.user?.role === "ADMIN" || session?.user?.role === "SUPER_ADMIN" || session?.user?.role === "CONTENT_MANAGER";

  // Fetch all CMS section contents in parallel to avoid sequential database round-trips
  const [
    heroContentStr,
    contactContentStr,
    aboutContentStr,
    hallOfFameContentStr,
    academicsContentStr,
    whyChooseUsContentStr,
    studentLifeContentStr,
    achievementsContentStr,
    testimonialsContentStr
  ] = await Promise.all([
    getSectionContentVisual("homepage-hero", JSON.stringify({
      title: "Building Futures.<br />Inspiring Excellence.",
      subtitle: "Empowering students with knowledge, character, creativity, and confidence."
    }), isAdmin),
    getSectionContentVisual("contact-header", JSON.stringify({
      title: "Let's Start a Conversation",
      description: "Whether you have questions about admissions, want to schedule a campus tour, or just want to say hello, our team is ready to help."
    }), isAdmin),
    getSectionContentVisual("about-section", JSON.stringify({
      title: "Nurturing Leaders of Tomorrow",
      description: "Manka Public School is a premier educational institution committed to providing holistic education. We believe in creating an environment where curiosity is encouraged, creativity is nurtured, and character is built.",
      vision: "To be a center of excellence in education that empowers students to reach their full potential and contribute positively to society.",
      mission: "To provide a dynamic and inclusive learning environment that fosters intellectual, social, and emotional growth through innovative teaching methodologies."
    }), isAdmin),
    getSectionContentVisual("hall-of-fame-section", "{}", isAdmin),
    getSectionContentVisual("academics-section", "{}", isAdmin),
    getSectionContentVisual("why-choose-us-section", "{}", isAdmin),
    getSectionContentVisual("student-life-section", "{}", isAdmin),
    getSectionContentVisual("achievements-section", "{}", isAdmin),
    getSectionContentVisual("testimonials-section", "{}", isAdmin)
  ]);

  let heroContent = { title: "", subtitle: "" };
  try {
    heroContent = JSON.parse(heroContentStr);
  } catch (e) {
    // fallback if parsing fails
  }

  let contactContent = undefined;
  try { contactContent = JSON.parse(contactContentStr); } catch (e) {}

  let aboutContent = undefined;
  try { aboutContent = JSON.parse(aboutContentStr); } catch (e) {}

  let hallOfFameContent = undefined; 
  try { hallOfFameContent = JSON.parse(hallOfFameContentStr); } catch (e) {}

  let academicsContent = undefined; 
  try { academicsContent = JSON.parse(academicsContentStr); } catch (e) {}

  let whyChooseUsContent = undefined; 
  try { whyChooseUsContent = JSON.parse(whyChooseUsContentStr); } catch (e) {}

  let studentLifeContent = undefined; 
  try { studentLifeContent = JSON.parse(studentLifeContentStr); } catch (e) {}

  let achievementsContent = undefined; 
  try { achievementsContent = JSON.parse(achievementsContentStr); } catch (e) {}

  let testimonialsContent = undefined; 
  try { testimonialsContent = JSON.parse(testimonialsContentStr); } catch (e) {}

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <Hero title={heroContent.title} subtitle={heroContent.subtitle} />

      {/* Main Content Area */}
      <div className="flex-grow">
        <About content={aboutContent} />
        <HallOfFame content={hallOfFameContent} />
        <Academics content={academicsContent} />
        <WhyChooseUs content={whyChooseUsContent} />
        <StudentLife content={studentLifeContent} />
        <Achievements content={achievementsContent} />
        <Testimonials content={testimonialsContent} />
        <Contact content={contactContent} />
      </div>

      <Footer />
    </main>
  );
}
