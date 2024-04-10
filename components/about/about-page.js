import Image from "next/image";
import classes from "./about-page.module.css";
import UtilButton from "../utilities/button";
import Composition from "../utilities/composition";

export default function AboutPage() {
  return (
    <div className={classes.about_container}>
      <div className={classes.bg_image}>
        <div className={classes.title}>
          <h1>About us</h1>
          <UtilButton>DISCOVER TOURS</UtilButton>
        </div>
      </div>
      <div className={classes.intro}>
        <h2>Introduction</h2>
        <div className={classes.intro_content}>
          <div>
            <div>
              Embark on an unparalleled odyssey through the heart of England and
              the enchanting landscapes of Europe with WT World Tour, the
              epitome of immersive travel experiences. Established in 2024, our
              passion for exploration and dedication to exceeding expectations
              have propelled us to the forefront of the travel industry.
            </div>
            <br />
            <div>
              At WT World Tour, we believe that travel is not just about
              visiting destinations; it's about creating lasting memories and
              forging connections with the world around us. From the cobblestone
              streets of picturesque English villages to the majestic peaks of
              the Swiss Alps, our meticulously crafted tours offer a tapestry of
              experiences designed to captivate the senses and ignite the spirit
              of adventure within every traveler.
            </div>
            <br />
            <div>
              Whether you're a history buff eager to delve into the rich
              heritage of ancient cities or a nature enthusiast craving the
              tranquility of remote landscapes, our diverse range of itineraries
              caters to all interests and preferences. Guided by seasoned
              experts with a deep-rooted passion for storytelling, our tours
              blend cultural immersion with personalized attention to ensure
              that each moment is filled with wonder and discovery.
            </div>
            <br />
            <div>
              With WT World Tour, you can rest assured that every detail of your
              journey, from accommodation to transportation, is meticulously
              planned to provide unparalleled comfort and convenience.
            </div>
            <br />
            <div>
              Join us on a voyage of a lifetime and let the magic of travel
              ignite your soul.
            </div>
          </div>
          <Composition />
        </div>
      </div>
      <div className={classes.reasons}></div>
    </div>
  );
}
