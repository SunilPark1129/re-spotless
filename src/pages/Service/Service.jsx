/*
Created by Sunil Park

Purpose:
this page is the Service Page.
on this page, users can find answers to frequently asked questions and the benefits that customers can get through this store.

Re-render Page:
Modal.jsx
*/

import React from "react";
import {
  StyledMain,
  StyledArticle,
  StyledHeader,
  StyledContent,
} from "../../components/styles/Page.styled";
import {
  StyledArticleService,
  StyledServiceContent,
  StyledServiceSection,
} from "./Service.styled";

import { serviceData, data } from "./data";
import Modal from "./Modal";

const Service = () => {
  return (
    <StyledMain>
      <StyledArticleService>
        <StyledHeader>
          <h1>Service</h1>
          <span></span>
          <p>
            These are the services we take into consideration in order to better
            serve our customers
          </p>
        </StyledHeader>
        <StyledServiceContent>
          {serviceData.map((item) => {
            return (
              <StyledServiceSection key={item.subject}>
                <img src={item.image} alt={item.subject} />
                <h2>{item.subject}</h2>
                <p>{item.description}</p>
              </StyledServiceSection>
            );
          })}
        </StyledServiceContent>
      </StyledArticleService>
      <StyledArticle>
        <StyledHeader>
          <h1>Q & A</h1>
          <span></span>
          <p>
            We've put together a list of what we offer our customers and the
            most frequently asked questions from them
          </p>
          <p>Click on the boxes below to find out what we can offer</p>
        </StyledHeader>
        <StyledContent>
          {data.map((item) => {
            return (
              <Modal
                key={item.subject}
                icon={item.icon}
                subject={item.subject}
                description={item.description}
              />
            );
          })}
        </StyledContent>
      </StyledArticle>
    </StyledMain>
  );
};

export default Service;
