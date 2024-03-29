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
  StyledBannerSection,
  StyledBannerButtonBox,
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
    setAnimation("");

    const resetProcessTimer = window.setInterval(() => {
      setAnimation("process-animation");
    }, 50);

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 8000);

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
      <StyledBannerSection
        className={currentIndex === 0 ? "banner-display" : ""}
      >
        <img src={bannerWater} alt="water with bubbles" />
        <h2>Keep it clean and beautiful</h2>
        <p>Cleanliness and beauty determine your impression</p>
      </StyledBannerSection>
      <StyledBannerSection
        className={currentIndex === 1 ? "banner-display" : ""}
      >
        <img src={bannerPeople} alt="two people are looking at their shirts" />
        <h2>Services for customers</h2>
        <p>We provide many services to satisfy our customers</p>
      </StyledBannerSection>
      <StyledBannerSection
        className={currentIndex === 2 ? "banner-display" : ""}
      >
        <img src={bannerQuality} alt="silk that expresses quality" />
        <h2>We are here for you</h2>
        <p>Please contact us if have any inquiries or questions</p>
      </StyledBannerSection>
      <StyledBannerButtonBox>
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
      </StyledBannerButtonBox>
      <StyledBannerProcess>
        <span className={animation}></span>
      </StyledBannerProcess>
    </StyledBanner>
  );
};

export default Banner;
