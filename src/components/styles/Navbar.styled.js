import styled from "styled-components";
import { Container } from "./Container.styled";

export const StyledContainerNavbar = styled(Container)
`
  flex-direction: row;
`;

export const StyledNavbar = styled.nav `
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.constDark};

  > div {
    padding: 0 1rem;
    justify-content: space-between;
    align-items: center;
  }

  .nav--active {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const StyledNavbarLink = styled.ul `
  padding: 1.5rem 0;
  display: flex;
  gap: 2rem;

  li a {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.constLight};
  }

  li:hover a {
    color: ${({ theme }) => theme.colors.main};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 1rem;
  }
`;