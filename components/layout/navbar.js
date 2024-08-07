import Link from "next/link";
import classes from "./navbar.module.css";
import logo from "@/public/logo2.png";
import Image from "next/image";

export default function Navbar({ fixed }) {
  return (
    <div className={`${classes.navigation} ${fixed && classes.fixed}`}>
      <div className={classes.logo}>
        <Link href="/">
          <Image
            src={logo}
            alt="The logo of WT"
            height={75}
            width={75}
            priority
          />
        </Link>
        <div>
          <h1>World Tour</h1>
          <h3>The world is</h3>
          <h3> yours to explore</h3>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <Link className={classes.link} href="/tours">
              Tours
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/summer-school">
              Summer school
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
