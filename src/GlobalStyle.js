import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        color: #93918F;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Bitter', serif;
        color: #000000;
    }

    a {
        color: #93918F;
        text-decoration: none;
    }
`;
export default GlobalStyle;
