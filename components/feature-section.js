import { Suspense } from "react";
import FeatureCard from "./feature-card";
import classes from "./feature-section.module.css";
import UtilButton from "./utilities/button";

export default function FeatureSection({ innerRef, hidden }) {
  const thisYear = new Date().getFullYear();

  const FeaturedTours = async function () {
    const tours = await fetch(
      `https://wt-world-tour-default-rtdb.asia-southeast1.firebasedatabase.app/tours.json`
    );

    const result = await tours.json();
    return (
      <div className={classes.feature_cards}>
        {Object.values(result)
          .slice(0, 3)
          .map((tour, i) => (
            <FeatureCard tour={tour} key={Object.keys(result)[i]} slug={Object.keys(result)[i]} />
          ))}
      </div>
    );
  };

  return (
    <section
      className={`${classes.section} ${hidden && classes.hidden}`}
      ref={innerRef}
    >
      <div>
        <h2 className={classes.heading}>Best tour of {thisYear}</h2>
      </div>
      <Suspense>
        <FeaturedTours />
      </Suspense>
      <div>
        <UtilButton color="blue">Discover all tours</UtilButton>
      </div>
    </section>
  );
}
