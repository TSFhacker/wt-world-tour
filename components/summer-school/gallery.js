import Image from "next/image";
import img1 from "@/public/img_7026_filter.1920x1080.jpg";
import classes from "./gallery.module.css";

export default function Gallery() {
  return (
    <div className={classes.gallery_container}>
      <Image unoptimized src={img1} width={500} height={500} alt="gallery" />
      <p>
        THE INTERNATIONAL <span>SUMMER SCHOOL</span> FOR{" "}
        <span>UNIQUE EXPERIENCES</span>
      </p>
    </div>
  );
}
