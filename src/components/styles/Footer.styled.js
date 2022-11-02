import styled from "styled-components";

export const StyledFooter = styled.footer `
  background-color: ${({ theme }) => theme.colors.constDark};
  color: ${({ theme }) => theme.colors.constLight};
  padding: 2rem;
  text-align: center;
  font-size: 1em;
`;