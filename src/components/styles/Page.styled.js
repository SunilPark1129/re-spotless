import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledHeader = styled.div`
  text-align: center;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  border-top: 4px dashed ${({ theme }) => theme.colors.main};

  h1 {
    font-size: 1.5em;
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
`;
