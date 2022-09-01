import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1a1a1a;
    font-family: 'Inter', sans-serif;
    padding: 40px 20px;

    * {
      line-height: 120%; 
    }
  }
`;