import styled from "styled-components";
import {
  StyledArticle,
  StyledContent,
} from "../../components/styles/Page.styled";

export const StyledArticleService = styled(StyledArticle)`
  justify-content: center;
`;

export const StyledServiceSection = styled.section`
  display: flex;
  flex: 1 1 20%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 16rem;
  min-width: 12rem;
  text-align: center;

  h2 {
    font-size: 1.2em;
  }

  p {
    font-size: 1em;
  }

  img {
    width: 6em;
    height: 6em;
    object-fit: cover;
    border-radius: 50%;
    /* box-shadow: 0px 0px 5px black; */
  }
`;

export const StyledServiceContent = styled(StyledContent)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledServiceModalSection = styled.section`
  border: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .description {
    display: none;
    background-color: ${({ theme }) => theme.colors.light};
    padding: 2rem;
    border-radius: 0 0 0.5rem 0.5rem;
    border-top: 2px solid ${({ theme }) => theme.colors.main};
    p {
      color: ${({ theme }) => theme.colors.dark};
      line-height: 1.8em;
      font-size: 1em;
    }
  }

  .subject--active {
    background-color: ${({ theme }) => theme.colors.main};
    p,
    .icon {
      color: ${({ theme }) => theme.colors.dark};
    }
  }

  .description--active {
    display: flex;
  }
`;

export const StyledServiceModalCover = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 1rem;

  h4 {
    font-size: 1em;
  }

  .icon {
    width: 1rem;
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.main};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};

    .icon {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`;
