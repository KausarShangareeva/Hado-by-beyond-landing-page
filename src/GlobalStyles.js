import { createGlobalStyle } from "styled-components";
import { respond } from "./Breakpoints";

export const GlobalStyles = createGlobalStyle`
/* Подключение шрифтов */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
 
  @font-face {
  font-family: 'Marvin Visions';
  src: url('/fonts/MarvinVisions-Bold.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html {
  font-size: 52.5%; /* базовый размер: 1rem = 8.4px */

  /* Большие десктопы / планшеты ландшафт */
  ${respond("tab-land")} {
    font-size: 50%; /* чуть меньше на больших экранах */
  }

  /* Планшеты портрет */
  ${respond("tab-port")} {
    font-size: 50%;
  }

  /* Маленькие планшеты / большие телефоны */
  ${respond("s-phone")} {
    font-size: 50%;
  }

  /* Средние телефоны */
  ${respond("m-phone")} {
    font-size: 48%;
  }

  /* Маленькие телефоны */
  ${respond("f-phone")} {
    font-size: 46%;
  }

  /* Самые маленькие телефоны */
  ${respond("xs-phone")} {
    font-size: 44%;
  }
}


 body {
   padding: 0;
   color: var(--color-font);
   background-color: var(--color-bg1);
   margin: 0 auto;
   width: 100%;
   font-family: "Montserrat";
}


  :root {
    /* Fonts */
    --font-main: 'Montserrat', sans-serif;
    --font-heading: 'Marvin Visions', cursive;

    /* Colors */
    --color-button-beige: #C9B499;
    --color-button-text: #000000;
    --color-button-hover: #fff4e6;

    --color-icon-bg-white: #FFFFFF;
    --color-icon-color-black: #000000;
    --color-icon-bg-black: #000000;
    --color-icon-color-white: #FFFFFF;

    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-highlight: #C0EB75;
    --color-font: #343a40

    --color-bg1: #FFFFFF;
    --color-bg2: #FFFFFF;

    /* Typography */
    --font-h1: 8rem; /* 80px */
    --font-h2: 6rem; /* 60px */
    --font-h3: 2.5rem; /* 25px */
    --font-h4: 3rem; /* 30px */
    --font-p: 1.8rem; /* 18px */
    --font-p-medium: 2rem; /* 18px */
    --font-p-big: 2.5rem; /* 18px */
    --font-tags: 1.6rem; /* 16px */
    --font-button: 2rem; /* 20px */

    /* Icon sizes */
    --icon-small: 2.4rem;
    --icon-small-bg: 5rem;
    --icon-large: 7rem;

    /* Bubble effect */
    --bubble-opacity: 0.5;
    --bubble-blur: 200px;
  }

  
`;
