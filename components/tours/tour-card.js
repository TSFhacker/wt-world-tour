"use client";

import Image from "next/image";
import classes from "./tour-card.module.css";
import UtilButton from "../utilities/button";

export default function TourCard({ tour, slug }) {
  return (
    <div className={classes.card}>
      <div>
        <Image
          src={tour.images[0]}
          width={350}
          height={350}
          alt={`Image of ${tour.tour_name}`}
          className={classes.tour_image}
        />
      </div>
      <div className={classes.description}>
        <h2 className={classes.name}>{tour.tour_name}</h2>
        <p className={classes.intro}>
          {tour.summary.length > 100
            ? `${tour.summary.slice(0, 100)}...`
            : tour.summary}
        </p>
        <div className={classes.detail_button}>
          <UtilButton color="blue" link={`tours/${slug}`}>
            Details
          </UtilButton>
        </div>
      </div>
    </div>
  );
}
