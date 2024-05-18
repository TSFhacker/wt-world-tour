import Image from "next/image";
import classes from "./comfort.module.css";
import { CiCircleCheck } from "react-icons/ci";

export default function Comfort(tourInfo) {
  return (
    <div className={classes.comfort_container}>
      <h2>Comfort</h2>
      <figure className={classes.summary_section}>
        <div>
          <h3>Tour summary</h3>
          <figcaption>{tourInfo.summary}</figcaption>
        </div>
        <Image
          src={tourInfo.summary_image}
          width={500}
          height={300}
          alt="a picture"
          className={classes.comfort_image}
        />
      </figure>
      <div className={classes.included_section}>
        <h3>What's included</h3>
        <ul>
          {tourInfo.features?.map((feature) => (
            <li>
              <CiCircleCheck className={classes.check_icon} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
