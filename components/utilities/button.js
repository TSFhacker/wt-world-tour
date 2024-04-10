import Link from "next/link";
import classes from "./button.module.css";

export default function UtilButton({ children, color, link = "tours" }) {
  return (
    <Link className={`${classes.btn} ${classes[color]}`} href={link}>
      {children}
    </Link>
  );
}
