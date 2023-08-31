/*
Created by Sunil Park

Purpose:
this page is the modal page of the service page.
click on the subject to make the descript visible.

Important:
whenever modal button is pressed, the page is rendered.
*/

import React, { useState } from "react";
import { StyledServiceModalSection } from "./Service.styled";

const Modal = ({ icon, subject, description }) => {
  const [hasModalOpen, setModalOpen] = useState(false);

  const onClickHandler = () => {
    setModalOpen(!hasModalOpen);
  };

  return (
    <StyledServiceModalSection onClick={onClickHandler}>
      <header className={hasModalOpen ? "subject--active" : ""}>
        <div className="icon">{icon}</div>
        <h4>{subject}</h4>
      </header>
      <div
        className={
          hasModalOpen ? "description description--active" : "description"
        }
      >
        <p>{description}</p>
      </div>
    </StyledServiceModalSection>
  );
};

export default Modal;
