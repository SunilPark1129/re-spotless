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
  max-width: 25rem;
  min-width: 15rem;
  text-align: center;

  img {
    width: 10em;
    height: 10em;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 5px black;
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
  transition: 0.2s background-color;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    header {
      p {
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  }

  header {
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 1rem;

    h4 {
      font-size: 1.3em;
    }

    p {
      width: 1rem;
      transition: 0.2s color;
      font-size: 1.5em;
      color: ${({ theme }) => theme.colors.main};
    }
  }

  div {
    display: none;
    background-color: ${({ theme }) => theme.colors.light};
    padding: 2rem;
    border-radius: 0 0 0.5rem 0.5rem;
    border-top: 2px solid ${({ theme }) => theme.colors.main};
    p {
      color: ${({ theme }) => theme.colors.dark};
      line-height: 1.8em;
      font-size: 1.1em;
    }
  }

  .subject--active {
    background-color: ${({ theme }) => theme.colors.main};
    p {
      color: ${({ theme }) => theme.colors.dark};
    }
  }

  .description--active {
    display: flex;
  }
`;
