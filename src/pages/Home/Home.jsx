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

import { StyledMain } from "../../components/styles/Page.styled";

import Banner from "./Banner";
import Main from "./Main";
import Photos from "./Photos";

const Home = () => {
  return (
    <StyledMain>
      <Banner />
      <Main className="home" />
      <Photos />
    </StyledMain>
  );
};

export default Home;
