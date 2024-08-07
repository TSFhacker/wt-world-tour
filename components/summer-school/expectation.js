import Image from "next/image";
import img2 from "@/public/img_5034_filter.600x600.jpg";
import img1 from "@/public/20180723_102811280_ios_filter.600x600.jpg";
import img3 from "@/public/mg_9618_filter.600x600.jpg";
import classes from "./expectation.module.css";
import UtilButton from "../utilities/button";

export default function Expectation() {
  return (
    <div className={classes.expectation_container}>
      <div className={classes.expectation_images}>
        <Image
          src={img1}
          className={classes.expectation_image_1}
          width={500}
          height={500}
          alt="expectation"
        />
        <div>
          <Image
            src={img2}
            className={classes.expectation_image_2}
            width={500}
            height={500}
            alt="expectation"
          />
          <Image
            src={img3}
            className={classes.expectation_image_3}
            width={500}
            height={500}
            alt="expectation"
          />
        </div>
        <div className={classes.expectation_intro}>
          <div>
            <h2>What to expect</h2>
            <p>
              Our programme ensures students are involved in academic classes as
              well as structured and supervised activities each day. Every young
              person who enrolls with us gains invaluable life skills, forges
              long-lasting friendships, and becomes part of our diverse global
              family.
            </p>
            <UtilButton children="Contact us" color="blue" link="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
