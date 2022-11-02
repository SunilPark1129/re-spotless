import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  max-width: ${({ theme }) => theme.tablet};
  display: flex;
  margin: auto;
  flex-direction: column;
`;