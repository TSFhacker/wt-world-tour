import Image from "next/image";
import classes from "./feature-card.module.css";
import UtilButton from "./utilities/button";

export default function FeatureCard({ tour, slug }) {
  return (
    <div className={classes.card}>
      <div className={classes.card_frontface}>
        <Image
          className={classes.picture}
          src={tour.images[0]}
          width={300}
          height={300}
          alt="Tour picture"
        />
        <h4 className={classes.tour_name}>{tour.tour_name}</h4>
      </div>
      <div className={classes.card_backface}>
        <div>
          <UtilButton link={`tours/${slug}`}>Book now!</UtilButton>
        </div>
      </div>
    </div>
  );
}
