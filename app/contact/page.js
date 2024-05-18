import ContactForm from "@/components/contact/contact-form";
import Navbar from "@/components/layout/navbar";

export async function generateMetadata() {
  return {
    title: "Contact",
    description: "The contact page helping customer to contact WT World Tour",
  };
}

export default function Contact() {
  return (
    <div>
      <Navbar fixed={true} />
      <ContactForm />
    </div>
  );
}
