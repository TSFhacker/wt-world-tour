import { CiCircleCheck } from "react-icons/ci";
import classes from "./reasons.module.css";

export default function Reasons() {
  return (
    <div className={classes.reasons_container}>
      <h2>Why us</h2>
      <ul>
        <li>
          <CiCircleCheck className={classes.check_icon} />
          Supervised, safe environments
        </li>
        <li>
          <CiCircleCheck className={classes.check_icon} />
          Small class sizes
        </li>
        <li>
          <CiCircleCheck className={classes.check_icon} />
          Pre-university experience
        </li>
        <li>
          <CiCircleCheck className={classes.check_icon} />
          Real life skills for the future
        </li>
        <li>
          <CiCircleCheck className={classes.check_icon} />
          Full English immersion school
        </li>
        <li>
          <CiCircleCheck className={classes.check_icon} />
          We care about our students' growth
        </li>
        <li>
          <CiCircleCheck className={classes.check_icon} />
          Facilities that are out of this world
        </li>
        <li>
          <CiCircleCheck className={classes.check_icon} />
          Students encouraged to be themselves
        </li>
        <li>
          <CiCircleCheck className={classes.check_icon} />
          Experience and share cultures
        </li>
      </ul>
    </div>
  );
}
