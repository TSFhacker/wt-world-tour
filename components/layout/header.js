import Link from "next/link";
import classes from "./header.module.css";
import UtilButton from "../utilities/button";

export default function Header({ innerRef }) {
  return (
    <header className={classes.header} ref={innerRef}>
      <div>
        <h1>WT World Tour</h1>
        <h2>Brings the world to your doorstep</h2>
        <UtilButton>Discover tours now</UtilButton>
      </div>
    </header>
  );
}
