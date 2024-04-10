import classes from "./itinerary.module.css";
import ItineraryItem from "./itinerary-item";

export default function Itinerary(tourInfo) {
  return (
    <div className={classes.itinerary_container}>
      <h2>Intinerary</h2>
      {tourInfo.itinerary?.map((item, i) => (
        <ItineraryItem info={item} i={i} />
      ))}
    </div>
  );
}
