import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  font-family: "Pretendard";
  font-size: 16px;
  line-height: 24px;

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0px;
    padding: 0px;
  }

  div {
    box-sizing: border-box;
  }
  body{
    font-family: Pretendard;
  }
`;
