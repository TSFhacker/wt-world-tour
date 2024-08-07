import summerPic from "@/public/pexels-123877718-9965454.jpg";
import Image from "next/image";
import classes from "./summer-school-intro.module.css";

export default function SummerSchoolIntro() {
  return (
    <div className={classes.container}>
      <div className={classes.intro_container}>
        <div>
          <Image
            unoptimized
            src={summerPic}
            width={300}
            height={300}
            alt="Summer school"
          />
        </div>
        <div className={classes.intro_detail}>
          <h2>WELCOME TO WT World Tour summer school program</h2>
          <br />
          <p>
            We provide all-encompassing summer school programmes in the United
            Kingdom, combining full immersion in English language, sport,
            creativity, culture, and fun.
          </p>
          <br />
          <p>
            Our inclusive award - winning summer programmes are designed for
            students from all nationalities and backgrounds aged between 13 and
            18.
          </p>
        </div>
      </div>
    </div>
  );
}
