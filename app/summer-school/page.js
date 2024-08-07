import ContactForm from "@/components/contact/contact-form";
import Expectation from "@/components/summer-school/expectation";
import Experience from "@/components/summer-school/experience";
import Gallery from "@/components/summer-school/gallery";
import ProgramList from "@/components/summer-school/program-list";
import Reasons from "@/components/summer-school/reasons";
import SummerSchoolIntro from "@/components/summer-school/summer-school-intro";
import ThemeImages from "@/components/summer-school/theme-images";

export default function SummerSchool() {
  return (
    <div>
      <ThemeImages />
      <SummerSchoolIntro />
      <ProgramList />
      <Experience />
      <Expectation />
      <Gallery />
      <Reasons />
      <ContactForm />
    </div>
  );
}
