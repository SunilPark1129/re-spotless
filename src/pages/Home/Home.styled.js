import styled, { keyframes } from "styled-components";
import { StyledMain } from "../../components/styles/Page.styled";

export const StyledMainHome = styled(StyledMain)
`
  .isVisible {
    transform: translateX(0);
    &:nth-child(2) {
      transform: translateX(0);
    }
  }
`;

export const StyledBanner = styled.div `
  display: flex;
  width: 100%;
  height: 40rem;
  position: relative;
  overflow: hidden;
  margin-top: 2rem;

  .banner-display {
    opacity: 1;
    pointer-events: auto;

    h3 {
      opacity: 1;
      transform: translateX(0);
      transition-duration: 1s;
    }

    p {
      opacity: 1;
      transform: translateX(0);
      transition-duration: 1s;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 35rem;
  }
`;

export const StyledBannerImage = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  pointer-events: none;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.constLight};
  text-shadow: 1px 1px 5px black;
  gap: 1rem;
  text-align: center;
  transition-property: opacity;
  transition-duration: 0.3s;

  img {
    position: absolute;
    object-fit: cover;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    z-index: -1;
    filter: contrast(180%) brightness(70%);
  }

  h3 {
    font-size: 2.3em;
    opacity: 0;
    transform: translateX(-20%);
    transition-property: transform, opacity;
    transition-duration: 0s;
  }

  p {
    font-size: 1.6em;
    opacity: 0;
    transform: translateX(20%);
    color: ${({ theme }) => theme.colors.constLight};
    transition-property: transform, opacity;
    transition-duration: 0s;
  }
`;

export const StyledBannerButton = styled.button `
  position: absolute;
  width: 2em;
  height: 2em;
  background-color: ${({ theme }) => theme.colors.main};
  bottom: 2rem;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1.5em;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px black;
  color: ${({ theme }) => theme.colors.constDark};

  &:hover {
    filter: brightness(120%);
  }

  &:nth-of-type(1) {
    left: 2rem;
  }
  &:nth-of-type(2) {
    right: 2rem;
  }
`;

export const StyledBannerDots = styled.div `
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  width: 8rem;
  display: flex;
  justify-content: space-between;

  div {
    width: 1.5em;
    height: 1.5em;
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    box-shadow: 0px 0px 5px black;

    &:after {
      position: absolute;
      content: "";
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: 60%;
      height: 60%;
    }
    &:hover {
      &:after {
        background-color: ${({ theme }) => theme.colors.constLight};
      }
    }
  }

  .isActive {
    &:after {
      background-color: ${({ theme }) => theme.colors.constLight};
    }
  }
`;

export const AnimationBannerProcess = keyframes `
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`;

export const StyledBannerProcess = styled.div `
  width: 100%;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.constDark};
  position: absolute;
  bottom: 0;

  span {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: -100%;
    background-color: ${({ theme }) => theme.colors.main};
    transition: 1s left;
  }

  .process-animation {
    animation: 8s ${AnimationBannerProcess} linear;
  }
`;

export const HomeSection = styled.section `
  display: flex;
  align-items: center;
  max-width: 50rem;
  border-radius: 2rem;
  flex-direction: row-reverse;
  border: 2px solid ${({ theme }) => theme.colors.main};
  flex-wrap: wrap;
  transform: translateX(-50%);
  transition-property: transform;
  transition-duration: 0.3s;

  img {
    width: 20em;
    margin: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1 1 50%;
    padding: 1em 2em;
  }

  &:nth-of-type(2) {
    margin-left: auto;
    transform: translateX(50%);
  }

  a {
    color: ${({ theme }) => theme.colors.main};
    text-decoration: underline;
    font-weight: bolder;
  }
`;