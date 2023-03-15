import { store } from "../../store";

export const lightTheme = {
  palette: {
    primary: {
      main: "#8a3b06",
      light: " #5b1c03",
      dark: "#2c0d00",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      light: "#ad5502",
      dark: "#222222",
      contrastText: "#fff",
    },
    error: {
      main: "#8a3b06",
      light: "#c04b1c",
      dark: "#2c1703",
    },
    success: {
      main: "#3a2b06",
      light: "#c04b1c",
      dark: "#4c1703",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
};

export const darkTheme = {
  palette: {
    primary: {
      main: "#151515",
      light: " #5b1c03",
      dark: "#2c0d00",
      contrastText: "#fff",
    },
    secondary: {
      main: "#151515",
      light: "#ad5502",
      dark: "#fff",
      contrastText: "#fff",
    },
    error: {
      main: "#8a3b06",
      light: "#c04b1c",
      dark: "#2c1703",
    },
    success: {
      main: "#3a2b06",
      light: "#c04b1c",
      dark: "#4c1703",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
};
export const getTheme = () => {
  const currentTheme = store.getState().ui.themeMode;
  return currentTheme === "light" ? lightTheme : darkTheme;
};
