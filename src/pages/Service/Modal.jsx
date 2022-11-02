/*
Created by Sunil Park

Purpose:
this page is the modal page of the service page.
click on the subject to make the descript visible.

Important:
whenever modal button is pressed, the page is rendered.
*/

import React, { useState } from "react";
import { ServiceSection } from "./Service.styled";

const Modal = ({ icon, subject, description }) => {
  const [hasModalOpen, setModalOpen] = useState(false);

  const onClickHandler = () => {
    setModalOpen(!hasModalOpen);
  };

  return (
    <ServiceSection onClick={onClickHandler}>
      <header className={hasModalOpen ? "subject--active" : ""}>
        <p>{icon}</p>
        <h2>{subject}</h2>
      </header>
      <article className={hasModalOpen ? "description--active" : ""}>
        <p>{description}</p>
      </article>
    </ServiceSection>
  );
};

export default Modal;
