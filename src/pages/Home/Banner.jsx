/*
Created by Sunil Park

Purpose:
this page acts as a banner on the homepage.
each time the user presses the arrow button on the banner, it moves sideways.

Important:
render whenever the arrow button is pressed.
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";

import {
  StyledBanner,
  StyledBannerImage,
  StyledBannerButton,
  StyledBannerDots,
  StyledBannerProcess,
} from "./Home.styled";

import bannerWater from "../../assets/home_banner-water.jpg";
import bannerPeople from "../../assets/home_banner-people.jpg";
import bannerQuality from "../../assets/home_banner-quality.jpg";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    // reset the class name of the animation.
    setAnimation("");

    // by putting the class name back into the animation, it helps to initialize it whenever the currentIndex changes.
    const resetProcessTimer = window.setInterval(() => {
      setAnimation("process-animation");
    }, 50);

    // after time, the currentIndex will move to the next.
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 8000);

    // if currentIndex exceeds the maximum or minimum slide values, it sets the value to return to the beginning.
    let prev = currentIndex;
    if (prev > 2) {
      prev = 0;
    } else if (prev < 0) {
      prev = 2;
    }
    setCurrentIndex(prev);

    return () => {
      window.clearInterval(timer);
      window.clearInterval(resetProcessTimer);
    };
  }, [currentIndex]);

  return (
    <StyledBanner>
      <StyledBannerImage className={currentIndex === 0 ? "banner-display" : ""}>
        <img src={bannerWater} alt="water with bubbles" />
        <h4>Keep it clean and beautiful</h4>
        <p>Cleanliness and beauty determine your impression</p>
      </StyledBannerImage>
      <StyledBannerImage className={currentIndex === 1 ? "banner-display" : ""}>
        <img src={bannerPeople} alt="two people are looking at their shirts" />
        <h4>Services for customers</h4>
        <p>We provide many services to satisfy our customers</p>
      </StyledBannerImage>
      <StyledBannerImage className={currentIndex === 2 ? "banner-display" : ""}>
        <img src={bannerQuality} alt="silk that expresses quality" />
        <h4>We are here for you</h4>
        <p>Please contact us if have any inquiries or questions</p>
      </StyledBannerImage>
      <StyledBannerButton onClick={() => setCurrentIndex(currentIndex - 1)}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </StyledBannerButton>
      <StyledBannerButton onClick={() => setCurrentIndex(currentIndex + 1)}>
        <FontAwesomeIcon icon={faCaretRight} />
      </StyledBannerButton>
      <StyledBannerDots>
        <div
          className={currentIndex === 0 ? "isActive" : ""}
          onClick={() => setCurrentIndex(0)}
        ></div>
        <div
          className={currentIndex === 1 ? "isActive" : ""}
          onClick={() => setCurrentIndex(1)}
        ></div>
        <div
          className={currentIndex === 2 ? "isActive" : ""}
          onClick={() => setCurrentIndex(2)}
        ></div>
      </StyledBannerDots>
      <StyledBannerProcess>
        <span className={animation}></span>
      </StyledBannerProcess>
    </StyledBanner>
  );
};

export default Banner;
