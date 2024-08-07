import Image from "next/image";
import img1 from "@/public/mg_0922.650x450.jpg";
import img2 from "@/public/electives.650x450.jpg";
import img3 from "@/public/mg_9954_1_filter.650x450.jpg";
import classes from "./experience.module.css";
import UtilButton from "../utilities/button";

export default function Experience() {
  return (
    <div className={classes.experience_container}>
      <ul>
        <li>
          <div>
            EVERY STUDENT AT ISSFT ENJOYS A <span>PERSONALISED</span> EXPERIENCE
            TAILORED TO THEIR <span>INTERESTS</span> AND <span>AMBITIONS</span>
            <br />
            <UtilButton children="Contact us" color="blue" link="/contact" />
          </div>
        </li>
        <li>
          <Image
            src={img1}
            width={600}
            height={400}
            alt="picture of summer school"
          />
          <div className={classes.experience_intro}>
            <h3>ACADEMIC CLASSES</h3>
            <p>
              Our innovative academic classes are designed to stimulate and
              develop the minds of our students
            </p>
          </div>
        </li>
        <li>
          <Image
            src={img2}
            width={600}
            height={400}
            alt="picture of summer school"
          />
          <div className={classes.experience_intro}>
            <h3>ELECTIVE SUBJECTS</h3>
            <p>
              Through sport, culture and the arts the physical and creative
              potential of our students is unlocked
            </p>
          </div>
        </li>
        <li>
          <Image
            src={img3}
            width={600}
            height={400}
            alt="picture of summer school"
          />
          <div className={classes.experience_intro}>
            <h3>ACTIVITIES, ENTERTAINMENT AND TRIPS</h3>
            <p>
              Our exciting programme of sport, leisure and creative
              entertainment ensures that there's never a dull moment
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
