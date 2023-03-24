import React from "react";

import { StyledHomeContent, StyledPhoto } from "./Home.styled";
import { StyledHeader } from "../../components/styles/Page.styled";

import mending from "../../assets/mending.jpg";
import zipper from "../../assets/zipper.jpg";
import quality1 from "../../assets/quality1.jpg";
import quality2 from "../../assets/quality2.jpg";
import hand from "../../assets/hand.jpg";
import woman1 from "../../assets/woman1.jpg";
import woman2 from "../../assets/woman2.jpg";
import quality3 from "../../assets/quality3.jpg";
import woman3 from "../../assets/woman3.jpg";
import mending2 from "../../assets/mending2.jpg";
import mending3 from "../../assets/mending3.jpg";
import woman4 from "../../assets/woman4.jpg";

const Photos = () => {
  return (
    <StyledHomeContent>
      <StyledHeader>
        <h1>Photos</h1>
        <span></span>
        <p>Preview with photos how we serve our customers</p>
      </StyledHeader>
      <StyledPhoto>
        <img src={mending} alt="mending" />
        <img src={zipper} alt="zipper" />
        <img src={quality1} alt="cloth" />
        <img src={quality2} alt="panth" />
        <img src={hand} alt="woman hand" />
        <img src={woman1} alt="woman is mending the cloth" />
        <img src={woman2} alt="woman is deciding clothes" />
        <img src={quality3} alt="panth" />
        <img src={woman3} alt="woman with clothes" />
        <img src={mending2} alt="mending" />
        <img src={mending3} alt="mending" />
        <img src={woman4} alt="woman is holding the cloth" />
      </StyledPhoto>
    </StyledHomeContent>
  );
};

export default Photos;
