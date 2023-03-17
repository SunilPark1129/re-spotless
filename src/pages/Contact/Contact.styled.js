import styled from "styled-components";
import { StyledArticle } from "../../components/styles/Page.styled";

export const StyledArticleContact = styled(StyledArticle)`
  .active {
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

export const StyledLocation = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  min-width: 18rem;
  max-width: 30rem;
  width: 100%;
  p {
    text-align: right;
  }

  div {
    justify-content: space-between;
    display: flex;
    width: 100%;
    padding: 1rem;
    gap: 2rem;
  }
`;
