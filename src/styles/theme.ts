// theme.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: 'Inter', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    transition: color 0.2s ease-in;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.linkHover};
    }
  }
`;

export const paletas = {
  White: "rgba(255, 255, 255, 0.9)",
  White50: "rgba(255, 255, 255, 0.5)",
  White20: "rgba(255, 255, 255, 0.2)",
  Black: "rgba(10, 10, 10, 0.9)",
  Grafite: "rgba(45, 45, 45, 0.9)",
  GrafiteDark: "#2b2b2b",
  CinzaClaro: "rgba(65, 65, 65, 0.1)",
  BlueLight: "#0093e9",
  BlueLight50: "#1560bd",
  BlueDark: "#041e42",
  BlueDark50: "#07398050",
};

// Tema escuro
export const darkTheme = {
  colors: {
    background: paletas.GrafiteDark,
    text: paletas.White,
    link: paletas.BlueLight,
    linkHover: paletas.BlueLight50,
  },
};

// Tema claro
export const lightTheme = {
  colors: {
    background: paletas.White,
    text: paletas.GrafiteDark,
    link: paletas.BlueLight,
    linkHover: paletas.BlueLight50,
  },
};
