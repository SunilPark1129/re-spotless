import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2em;
`;

export const StyledHeader = styled.div`
  text-align: center;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 1.5em;

  h1 {
    font-size: 1.3em;
  }

  p {
    font-size: 1em;
  }

  span {
    margin: auto;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &:not(:nth-of-type(1)) {
    border-top: 4px dashed ${({ theme }) => theme.colors.main};
  }

  &:nth-last-of-type(1) {
    margin-bottom: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 2em;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.5em;
  }
`;
