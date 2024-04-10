"use client";
import Image from "next/image";
import img1 from "@/public/tour/tour3.jpg";
import img2 from "@/public/tour/beach2.jpg";
import img3 from "@/public/tour/tour1.jpg";
import img4 from "@/public/tour/tour2.jpg";
import img5 from "@/public/tour/beach.jpg";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import classes from "./slider-section.module.css";
import { useEffect, useState } from "react";

export default function SliderSection({ innerRef, hidden }) {
  const [currentImg, setCurrentImg] = useState(1);
  const slideImgs = [img1, img2, img3, img4, img5];

  let intervalId;

  // const resetSliderInterval = function () {
  //   clearInterval(intervalId);
  //   intervalId = setInterval(function () {
  //     console.log("rouding");
  //     if (currentImg == 5) setCurrentImg(1);
  //     else setCurrentImg(currentImg + 1);
  //   }, 5000);
  //   console.log(intervalId);
  // };

  const moveToNextImg = function () {
    // clearInterval(intervalId);
    if (currentImg == 5) setCurrentImg(1);
    else setCurrentImg(currentImg + 1);
    // resetSliderInterval();
  };

  const moveToPrevImg = function () {
    if (currentImg == 1) setCurrentImg(5);
    else setCurrentImg(currentImg - 1);
    // resetSliderInterval();
  };

  // useEffect(resetSliderInterval, []);

  return (
    <div
      className={`${classes.slider_container} ${hidden && classes.hidden}`}
      ref={innerRef}
    >
      <h2>Breathtaking destinations</h2>
      <div className={classes.slider}>
        <PiArrowLeftThin
          className={classes.slider_arrow_left}
          onClick={moveToPrevImg}
        />
        <div className={classes.slider_pictures}>
          {slideImgs.map((img, i) => (
            <Image
              key={`slider_picture_${i}`}
              className={`${
                currentImg - 1 == i ? classes.slider_picture_active : ""
              }`}
              src={img}
              alt="A picture of a destination WT can take you"
            />
          ))}
        </div>

        <PiArrowRightThin
          className={classes.slider_arrow_right}
          onClick={moveToNextImg}
        />
      </div>
    </div>
  );
}
