import Image from "next/image";
import logo from "@/public/logo2.png";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <Image
          src={logo}
          alt="The logo of WT"
          height={75}
          width={75}
          priority
        />
        <div>
          <h1>World Tour</h1>
          <h3>The world is</h3>
          <h3> yours to explore</h3>
        </div>
      </div>
      <div className={classes.contact}>
        <div>
          <h5>Address</h5>
          <p>
            72 Thornbera Road, Bishop’s Storford, Hertfordshire, CM23 3NN, UK
          </p>
        </div>
        <div>
          <h5>Phone</h5>
          <p>+44 7593 735102</p>
        </div>
      </div>
    </footer>
  );
}
