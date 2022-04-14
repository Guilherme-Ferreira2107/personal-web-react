import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fonts};
    transition: all 0.15s ease-in;
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

export const darkTheme = {
  background: paletas.GrafiteDark,
  fonts: paletas.White,
};

export const lightTheme = {
  background: paletas.White,
  fonts: paletas.GrafiteDark,
};
