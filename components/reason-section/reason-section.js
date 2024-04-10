import classes from "./reason-section.module.css";
import { FaHouse, FaCar, FaPeopleGroup } from "react-icons/fa6";
import {
  PiShieldCheckThin,
  PiForkKnife,
  PiThumbsUpThin,
  PiMoneyThin,
} from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";

export default function ReasonSection({ innerRef, hidden }) {
  return (
    <section
      className={`${classes.reason_section} ${hidden && classes.hidden}`}
      ref={innerRef}
    >
      <div className={classes.reason_section_header}>
        <h2 className={classes.reason_section_heading}>
          We offer a vast inventory of services
        </h2>
        <div className={classes.reason_section_icons}>
          <figure>
            <FaHouse />
            <figcaption>Hotel</figcaption>
          </figure>
          <figure>
            <FaCar />
            <figcaption>Vehicle</figcaption>
          </figure>
          <figure>
            <FaPeopleGroup />
            <figcaption>Tourguide</figcaption>
          </figure>
          <figure>
            <PiForkKnife />
            <figcaption>Restaurant</figcaption>
          </figure>
          <figure>
            <AiOutlinePicture />
            <figcaption>Scenery</figcaption>
          </figure>
        </div>
      </div>

      <div className={classes.reason_section_content}>
        <figure>
          <PiThumbsUpThin className={classes.reason_section_content_icon} />
          <h3>Quality</h3>
          <figcaption>
            At our company, we take pride in providing unparalleled quality that
            stands as the benchmark in the market.
          </figcaption>
        </figure>

        <figure>
          <PiShieldCheckThin className={classes.reason_section_content_icon} />
          <h3>Reliability</h3>
          <figcaption>
            Here, reliability is ingrained in every aspect of our services,
            ensuring peace of mind for every traveler.
          </figcaption>
        </figure>
        <figure>
          <PiMoneyThin className={classes.reason_section_content_icon} />
          <h3>Affordability</h3>
          <figcaption>
            We offer unbeatable affordability without compromising on the
            quality and reliability of our services.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
