import AboutPage from "@/components/about/about-page";
import Navbar from "@/components/layout/navbar";

export async function generateMetadata() {
  return {
    title: "About WT World Tour",
    description: "This is the about page of WT World Tour, how it was founded",
  };
}

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutPage />
    </div>
  );
}
