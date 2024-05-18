"use client";
import Image from "next/image";
import classes from "./itinerary.module.css";
import { MdExpandMore } from "react-icons/md";
import dummyImg from "@/public/tour/tour2.jpg";

export default function ItineraryItem(params) {
  const { info, i } = params;
  const expandItem = function (e) {
    e.target
      .closest(`.${classes.itinerary_item}`)
      .classList.toggle(classes.itinerary_item_expand);
  };

  return (
    <div className={classes.itinerary_item} onClick={expandItem}>
      <h3>
        <p>
          <span>{`Day ${i + 1}: `}</span>
          {info.destination}
        </p>

        <MdExpandMore />
      </h3>
      <figure className={classes.itinerary_content}>
        <figcaption>{info.description}</figcaption>
        <Image src={info.image} width={500} height={300} alt="picture" />
      </figure>
    </div>
  );
}
