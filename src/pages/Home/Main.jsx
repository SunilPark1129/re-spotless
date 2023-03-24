/*
Created by Sunil Park

Purpose:
this page is the main page of the homepage.
users can view the summary of this website.

Important:
when the div targeted by useRef reaches its scroll goal, useOberserver causes the page to render
*/

import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { StyledHomeContent, HomeSection } from "./Home.styled";
import { StyledHeader } from "../../components/styles/Page.styled";

import homeImgStrongWoman from "../../assets/strong_woman.png";
import homeImgLaundryWoman from "../../assets/laundry_woman.png";
import homeImgIronWoman from "../../assets/iron_woman.png";

import useObserver from "../../hooks/useObserver";

const Main = () => {
  // these are sent through props to use in useObserver.
  const firstTarget = useRef(null);
  const secondTarget = useRef(null);
  const thirdTarget = useRef(null);
  const observerOption = {
    root: null,
    rootMargin: "-50px",
    threshold: 0.1,
  };

  // it receives the return value as a boolean and, if true, changes the class name to add the animation effect.
  const isVisibleOne = useObserver(observerOption, firstTarget, true);
  const isVisibleTwo = useObserver(observerOption, secondTarget, true);
  const isVisibleThree = useObserver(observerOption, thirdTarget, true);
  return (
    <StyledHomeContent>
      <StyledHeader>
        <h1>Information</h1>
        <span></span>
        <p>
          Welcome and thank you for visiting our website of Spotless Cleaners
          located in Deptford NJ
        </p>
        <p>Feel free to scroll down to read a brief description of us</p>
      </StyledHeader>
      <HomeSection
        home
        ref={firstTarget}
        className={`${isVisibleOne ? "isVisible" : ""}`}
      >
        <div>
          <h4>We are Spotless Cleaners!</h4>
          <p>
            We have been running a laundry in Deptford, NJ for over 10 years.
            The reason we have been able to run a laundry for a long time is
            thanks to the constant visits of our customers.
          </p>
          <p>
            Because we keep things tidy, we are recognized by many other
            companies and leave their clothes to our laundry. We've been working
            for a long time and have never had any problems, so we guarantee the
            reliability.
          </p>
        </div>
        <img src={homeImgLaundryWoman} alt="woman holding laundry" />
      </HomeSection>
      <HomeSection
        ref={secondTarget}
        className={`${isVisibleTwo ? "isVisible" : ""}`}
      >
        <div>
          <h4>How we serve our customers</h4>
          <p>
            We provide many services to satisfy our customers. Among the many
            services, we use Organic Dry Cleaning to remove damage to clothes
            when washing.
          </p>
          <p>
            We also wash all kinds of clothes, curtains and duvets. If you want
            to see more services, you can check in the service section or click
            the link <Link to="/service">(Link)</Link>.
          </p>
        </div>
        <img src={homeImgStrongWoman} alt="woman on washing machine" />
      </HomeSection>
      <HomeSection
        ref={thirdTarget}
        className={`${isVisibleThree ? "isVisible" : ""}`}
      >
        <div>
          <h4>Contact us anytime</h4>
          <p>
            We love to check our emails to better serve our customers. If you
            have any questions or inquiries, please email us from the contact
            menu. We will reply within 3 days on Business Day.
          </p>
          <p>
            To contact us, please click the link{" "}
            <Link to="/contact">(Link)</Link>. We look forward to meeting you in
            the near future so that we can provide you with a good service.
          </p>
        </div>
        <img src={homeImgIronWoman} alt="woman ironing" />
      </HomeSection>
    </StyledHomeContent>
  );
};

export default Main;
