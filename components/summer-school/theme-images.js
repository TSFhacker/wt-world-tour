import ImageSlideshow from "../utilities/image-slideshow";
import burgerImg from "@/public/pexels-pixabay-247823.jpg";
import electiveImg from "@/public/pexels-rdne-8033798.jpg";
import dumplingsImg from "@/public/pexels-quang-nguyen-vinh-222549-2132891.jpg";
import macncheeseImg from "@/public/pexels-joshua-mcknight-442355-1544723.jpg";
import pizzaImg from "@/public/issft-stirling-campus.600x400.jpg";
import schnitzelImg from "@/public/pexels-zen-chung-5537936.jpg";
import tomatoSaladImg from "@/public/summerschool.jpg";
import classes from "./theme-images.module.css";

let images = [
  { image: burgerImg, alt: "A picture of the summer camp" },
  { image: electiveImg, alt: "A picture of the summer camp" },
  { image: dumplingsImg, alt: "A picture of the summer camp" },
  { image: macncheeseImg, alt: "A picture of the summer camp" },
  { image: pizzaImg, alt: "A picture of the summer camp" },
  { image: schnitzelImg, alt: "A picture of the summer camp" },
  { image: tomatoSaladImg, alt: "A picture of the summer camp" },
];

export default function ThemeImages() {
  return (
    <div className={classes.theme_container}>
      <h1>Summer school</h1>
      <ImageSlideshow images={images} />
      <p>
        THE INTERNATIONAL <span>SUMMER SCHOOL</span> FOR
        <span>LIFETIME MEMORIES</span>
      </p>
    </div>
  );
}
