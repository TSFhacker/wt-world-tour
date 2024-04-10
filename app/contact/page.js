import ContactForm from "@/components/contact/contact-form";
import Navbar from "@/components/layout/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar fixed={true} />
      <ContactForm />
    </div>
  );
}
