import Image from "next/image";
import img1 from "@/public/adobestock_144700780.600x400.jpeg";
import img2 from "@/public/girls_oxford.600x400.jpg";
import img3 from "@/public/issft-stirling-campus.600x400.jpg";
import classes from "./program-list.module.css";
import UtilButton from "../utilities/button";

export default function ProgramList() {
  return (
    <div className={classes.list_container}>
      <div className={classes.list_intro}>
        <span>MAKE THE MOST OF YOUR SUMMER</span>
        <br />
        <br />
        Unleash the potential of your summer with experiences that combine
        learning, sports, fun, and adventure.
        <br />
        <br />
        <span>
          STUNNING ENVIRONMENTS FOR EDUCATION, SPORT, FUN AND... ADVENTURE!
        </span>
        <br />
        <br />
        Imagine spending your summer in breathtaking locations that offer more
        than just a getaway. Dive into a season filled with endless
        possibilities and unforgettable moments!
        <br />
        <br />
        <UtilButton children="Contact us" color="blue" link="/contact" />
      </div>

      <ul>
        <li>
          <Image
            src={img1}
            width={600}
            height={400}
            alt="picture of summer school"
          />
          <div className={classes.program_intro}>
            <h3>University of Stirling</h3>
            <p>For Ages 13-17</p>
            <br />
            <p>
              Exclusive summer enrichment programme in Stirling, the historic
              heart of Scotland.
            </p>
          </div>
        </li>
        <li>
          <Image
            src={img2}
            width={600}
            height={400}
            alt="picture of summer school"
          />
          <div className={classes.program_intro}>
            <h3>University of Oxford</h3>
            <p>For Ages 13-18</p>
            <br />
            <p>Exclusive Summer Programme in the heart of historic Oxford.</p>
          </div>
        </li>
        <li>
          <Image
            src={img3}
            width={600}
            height={400}
            alt="picture of summer school"
          />
          <div className={classes.program_intro}>
            <h3>Imperial College London</h3>
            <p>For Ages 14-18 </p>
            <br />
            <p>
              Exclusive pre-university experience in the heart of London,
              England.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
