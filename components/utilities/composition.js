import classes from "./composition.module.css";
import Image from "next/image";
import img1 from "@/public/tour/bridge.jpg";
import img2 from "@/public/tour/beach.jpg";
import img3 from "@/public/tour/beach2.jpg";

export default function Composition() {
  return (
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
  );
}
