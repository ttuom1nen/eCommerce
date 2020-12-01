import { createGlobalStyle } from "styled-components";
import { SCREEN_SIZE_SMALL } from "./defaultTokens";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans Condensed", sans-serif;
    padding: 20px 60px;

    @media screen and (max-width: ${SCREEN_SIZE_SMALL}) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;
