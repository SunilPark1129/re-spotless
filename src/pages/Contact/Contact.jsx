/*
Created by Sunil Park

Purpose:
This page provides information on how customers can access the store.
*/

import React from "react";

import {
  StyledMain,
  StyledArticle,
  StyledHeader,
} from "../../components/styles/Page.styled";

import { StyledArticleContact, StyledContactContent } from "./Contact.styled";

import { open, data } from "./data";

const Contact = () => {
  // Get today's date. return value is integer 0 to 7.
  const d = new Date();
  const now = d.getDay();

  return (
    <StyledMain>
      <StyledArticle>
        <StyledHeader>
          <h1>Contact</h1>
          <span></span>
          <p>
            If you have any other questions, please visit us directly or contact
            us by e-mail
          </p>
        </StyledHeader>
        <StyledContactContent>
          {data.map(({ subject, description }) => {
            return (
              <div key={subject}>
                <h4>{subject}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </StyledContactContent>
      </StyledArticle>
      <StyledArticleContact>
        <StyledHeader>
          <h1>Open Hours</h1>
          <span></span>
          <p>We are ready to provide you with a good service</p>
        </StyledHeader>
        <StyledContactContent>
          {/* If the number 'now' and value of data are the same, change the className to active and apply color */}
          {open.map((item, idx) => {
            return (
              <div key={item.day} className={idx === now ? "active" : ""}>
                <h4>{item.day}</h4>
                <h4>{item.open}</h4>
              </div>
            );
          })}
        </StyledContactContent>
      </StyledArticleContact>
    </StyledMain>
  );
};

export default Contact;
