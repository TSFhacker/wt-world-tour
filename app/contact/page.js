import ContactForm from "@/components/contact/contact-form";
import Navbar from "@/components/layout/navbar";
import { insertDummyData } from "@/lib/data";

export default function Contact() {
  insertDummyData();
  return (
    <div>
      <Navbar fixed={true} />
      <ContactForm />
    </div>
  );
}
