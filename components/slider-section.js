import classes from "./slider-section.module.css";
import ImageSlideshow from "./utilities/image-slideshow";
import img1 from "@/public/tour/tour3.jpg";
import img2 from "@/public/tour/beach2.jpg";
import img3 from "@/public/tour/tour1.jpg";
import img4 from "@/public/tour/tour2.jpg";
import img5 from "@/public/tour/beach.jpg";

const images = [
  {
    image: img1,
    alt: "A picture of the scenery that WT World Tour can show you",
  },
  {
    image: img2,
    alt: "A picture of the scenery that WT World Tour can show you",
  },
  {
    image: img3,
    alt: "A picture of the scenery that WT World Tour can show you",
  },
  {
    image: img4,
    alt: "A picture of the scenery that WT World Tour can show you",
  },
  {
    image: img5,
    alt: "A picture of the scenery that WT World Tour can show you",
  },
];

export default function SliderSection({ innerRef, hidden }) {
  return (
    <div
      className={`${classes.slider_container} ${hidden && classes.hidden}`}
      ref={innerRef}
    >
      <div>
        <ImageSlideshow images={images} />
      </div>
      <div>
        <h2>Breathtaking destinations</h2>
        <div className={classes.pitch}>
          <p>
            Our tours are not just about visiting new places; they are about
            creating memories that last a lifetime. Picture yourself exploring
            ancient ruins, savoring exquisite local cuisine, and mingling with
            indigenous communities.
          </p>
          <br />
          <p>
            Our expert guides, with their deep local knowledge and passion, will
            lead you through hidden gems and iconic landmarks, ensuring every
            moment is rich with discovery and wonder. Join us on a WT World Tour
            and open the door to a world where every day is a new adventure,
            every destination a new story, and every experience a step closer to
            the extraordinary.
          </p>
          <br />
          <p>
            Don't just travel—immerse yourself in the wonders of the world with
            WT World Tour. Your unforgettable journey awaits!
          </p>
          <br />
          <span>
            We guarantee a breathtaking and unique experience unlike anything
            you have ever seen before
          </span>
        </div>
      </div>
    </div>
  );
}
