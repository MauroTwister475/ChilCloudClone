import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --bg-blue: #007BFF;
    --bg-blue2: #0d529c;
    --bg-white: #FFFF;
    --bg-footer: #F8F9FA;
    --bg-gray: #BCBDBE;
    --bg-gray2: #F8F9FA;
    --bg-title: #212529;
    --bg-text: #212529;

    font-size: 60%;
  }

  *{
    margin: 0;
    padidng: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--bg-blue);
    --webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
  }
  html{
    scroll-behavior: smooth;
  }

`