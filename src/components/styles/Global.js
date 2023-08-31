import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: ${({ theme }) => theme.colors.light};
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    font-size: 1rem;
    min-width:${({ theme }) => theme.minWidth}
}

ul {    
    list-style-type: none;
}

a {
    color: black;
    text-decoration: none;
}

h3 {
    font-size: 2em;
}

h1, h2, h4, p {
    color: ${({ theme }) => theme.colors.dark};
}

@media (max-width: ${({ theme }) => theme.mobile}) {
    body {
        font-size: .8rem;
    }
}
`;

export default GlobalStyles;
