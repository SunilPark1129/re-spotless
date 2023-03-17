/*
Created by Sunil Park

Purpose:
this page is the homepage.
summarize usage and information on the website.

Re-render Page:
Banner.jsx
Main.jsx
*/

import React from "react";

import { StyledMain, StyledHeader } from "../../components/styles/Page.styled";

import Banner from "./Banner";
import Main from "./Main";

const Home = () => {
  return (
    <StyledMain>
      <Banner />
      <StyledHeader>
        <h1>Information</h1>
        <span></span>
        <p>
          Welcome and thank you for visiting our website of Spotless Cleaners
          located in Deptford NJ
        </p>
        <p>Feel free to scroll down to read a brief description of us</p>
      </StyledHeader>
      <Main className="home" />
    </StyledMain>
  );
};

export default Home;
