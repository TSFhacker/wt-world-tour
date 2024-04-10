import Image from "next/image";
import img1 from "@/public/tour/england.jpg";
import classes from "./detailed-header.module.css";
import { CiCircleCheck } from "react-icons/ci";

export default function DetailedHeader(params) {
  const { tourInfo } = params;
  return (
    <div className={classes.header_container}>
      <Image
        className={classes.bg_image}
        src={tourInfo.images[1]}
        width={300}
        height={300}
        alt="picture of the tour"
        unoptimized
      />
      <div className={classes.tour_intro}>
        <div className={classes.tour_intro_name}>
          <div>
            <h1 className={classes.tour_name}>{tourInfo.tour_name}</h1>
            <ul className={classes.tour_info}>
              <li>
                <span>Tour start: </span>
                {tourInfo.start}
              </li>
              <li>
                <span>Minimum group size: </span>
                {tourInfo.min_group_size}
              </li>
              <li>
                <span>Tour end: </span>
                {tourInfo.end}
              </li>
              <li>
                <span>Language: </span>
                {tourInfo.language}
              </li>
              <li>
                <span>Tour duration: </span>
                {tourInfo.duration}
              </li>
              <li>
                <span>Recommended age: </span>
                {tourInfo.age}
              </li>
            </ul>
          </div>

          <Image
            className={classes.tour_image}
            src={tourInfo.images[0]}
            width={500}
            height={300}
            alt="picture of the tour"
          />
        </div>

        <h1>Reasons to book</h1>
        <ul className={classes.tour_reasons}>
          {tourInfo.reasons?.map((reason) => (
            <li>
              <CiCircleCheck className={classes.check_icon} />
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
