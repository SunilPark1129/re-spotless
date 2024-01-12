import styled, { keyframes } from "styled-components";
import { StyledContent } from "../../components/styles/Page.styled";

export const StyledHomeContent = styled.article`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:not(:nth-of-type(1)) {
    border-top: 4px dashed ${({ theme }) => theme.colors.main};
  }

  &:nth-last-of-type(1) {
    margin-bottom: 4rem;
  }

  .isVisible {
    transform: translateX(0);
    &:nth-of-type(2) {
      transform: translateX(0);
    }
  }
`;

export const StyledBanner = styled.div`
  display: flex;
  width: 100%;
  height: 30rem;
  position: relative;
  overflow: hidden;

  .banner-display {
    opacity: 1;
    pointer-events: auto;

    h2 {
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

export const StyledBannerSection = styled.section`
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

  h2 {
    color: ${({ theme }) => theme.colors.constLight};
    font-size: 1.4em;
    opacity: 0;
    transform: translateX(-20%);
    transition-property: transform, opacity;
    transition-duration: 0s;
  }

  p {
    font-size: 1.2em;
    opacity: 0;
    transform: translateX(20%);
    color: ${({ theme }) => theme.colors.constLight};
    transition-property: transform, opacity;
    transition-duration: 0s;
  }
`;

export const StyledBannerButtonBox = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 5rem;
  bottom: 0;
  align-items: center;
`;

export const StyledBannerButton = styled.button`
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  background-color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1.4em;
  border-radius: 50%;
  box-shadow: 0px 0px 10px -3px black;
  color: #d1d1d1;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const StyledBannerDots = styled.div`
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  width: 6em;
  display: flex;
  justify-content: space-between;

  div {
    width: 1em;
    height: 1em;
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
      width: 50%;
      height: 50%;
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

export const AnimationBannerProcess = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
`;

export const StyledBannerProcess = styled.div`
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

export const HomeSection = styled.section`
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

  h4 {
    font-size: 1em;
  }
  p {
    font-size: 1em;
  }

  img {
    width: 16em;
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

export const StyledPhoto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  img {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
