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

import {
  StyledMain,
  StyledHeader,
  StyledContent,
} from "../../components/styles/Page.styled";

import Banner from "./Banner";
import Main from "./Main";
import Photos from "./Photos";

const Home = () => {
  return (
    <StyledMain>
      <Banner />
      <StyledContent>
        <Main className="home" />
        <Photos />
      </StyledContent>
    </StyledMain>
  );
};

export default Home;
