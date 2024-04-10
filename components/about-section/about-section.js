import Link from "next/link";
import classes from "./about-section.module.css";
import Image from "next/image";
import img1 from "@/public/tour/bridge.jpg";
import img2 from "@/public/tour/beach.jpg";
import img3 from "@/public/tour/beach2.jpg";

export default function AboutSection({ innerRef, hidden }) {
  return (
    <section
      className={`${classes.about_section} ${hidden && classes.hidden}`}
      ref={innerRef}
    >
      <h1 className={classes.about_section_heading}>
        Exciting tours for adventurous souls
      </h1>
      <div className={classes.about_section_content}>
        <div className={classes.about_description}>
          <h2>You are going to fall in love</h2>
          <p>
            Embark on an unforgettable journey with our premier tour service,
            where every moment is crafted to perfection just for you. At WT
            World Tour, we pride ourselves on delivering nothing short of
            excellence, ensuring that each step of your adventure surpasses
            expectations. From breathtaking landscapes to immersive cultural
            experiences, our meticulously curated itineraries promise to ignite
            your senses and ignite your wanderlust.
          </p>
          <h2>Explore the world</h2>
          <p>
            With expert guides leading the way, you'll delve deep into the heart
            of each destination, uncovering hidden gems and creating memories to
            last a lifetime. Whether you crave adrenaline-pumping escapades or
            serene escapes, our diverse range of tours caters to every
            traveler's desires. Let us take the reins of your journey, leaving
            you free to savor every moment as we weave together the ultimate
            travel experience. Choose WT World Tour for unparalleled service and
            discover the world in unparalleled style.
          </p>
          <Link className={classes.about_section_link} href={"tours"}>
            Learn more
          </Link>
        </div>
        <div className={classes.about_pictures}>
          <Image
            className={`${classes.about_picture} ${classes.about_picture_1}`}
            src={img1}
            width={300}
            height={250}
            alt="A picture of England"
            quality={100}
            unoptimized
          />
          <Image
            className={`${classes.about_picture} ${classes.about_picture_2}`}
            src={img2}
            width={300}
            height={250}
            alt="A picture of England"
            quality={100}
            unoptimized
          />
          <Image
            className={`${classes.about_picture} ${classes.about_picture_3}`}
            src={img3}
            width={300}
            height={250}
            alt="A picture of England"
            quality={100}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
