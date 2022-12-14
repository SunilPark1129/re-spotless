/*
Created by Sunil Park

Purpose:
This page provides information on how customers can access the store.

Re-render:
none
*/

import React from "react";

import {
  StyledPage,
  StyledMain,
  StyledHeader,
} from "../../components/styles/Page.styled";

import { StyledMainContact, StyledLocation } from "./Contact.styled";

import { open, data } from "./data";

const Contact = () => {
  // Get today's date. return value is integer 0 to 7.
  const d = new Date();
  const now = d.getDay();

  return (
    <>
      <StyledPage>
        <StyledHeader>
          <h1>Contact</h1>
          <span></span>
          <p>
            If you have any other questions, please visit us directly or contact
            us by e-mail
          </p>
        </StyledHeader>
        <StyledMain>
          <StyledLocation>
            {data.map(({ subject, description }) => {
              return (
                <div key={subject}>
                  <h4>{subject}</h4>
                  <p>{description}</p>
                </div>
              );
            })}
          </StyledLocation>
        </StyledMain>
      </StyledPage>
      <StyledPage>
        <StyledHeader>
          <h1>Open Hours</h1>
          <span></span>
          <p>We are ready to provide you with a good service</p>
        </StyledHeader>
        <StyledMainContact>
          <StyledLocation>
            {/* If the number 'now' and value of data are the same, change the className to active and apply color */}
            {open.map((item, idx) => {
              return (
                <div key={item.day} className={idx === now ? "active" : ""}>
                  <h4>{item.day}</h4>
                  <h4>{item.open}</h4>
                </div>
              );
            })}
          </StyledLocation>
        </StyledMainContact>
      </StyledPage>
    </>
  );
};

export default Contact;
