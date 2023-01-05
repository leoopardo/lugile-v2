import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;
        overflow: hidden;
        height: 100%;
        width: 100%;
        @media (max-width: 650px) {
   
  }
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, system-ui , sans-serif;
    }
    html {
        background-color: #CEBFF8;
    }
    
    :root {
      --ligthPurple: #CEBFF8;
      --purple: #A682FF;
      --blue: #715AFF;
      --blue200: #5887FF;
      --blue300: #55C1FF;
      --blue600: #102E4A;
    }

`;
