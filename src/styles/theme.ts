export const theme = {
  palette: {
    background: {
      light: "#ffffff",
      dark: "#313647",
      paper: "#40465b",
    },
    border: "#4b51694d",
    divider: {
      dark: "#464c64",
      darkHover: "#5d6584",
      light: "#e5e6ec",
    },
    link: "#b8c0ef",
    primary: {
      main: "#5867e7",
      hover: "#6070ff",
    },
    secondary: {
      main: "#ea3690",
      hover: "#ff4ba5",
    },
    success: "#7dff9a",
    text: {
      dark: {
        primary: "#24242a",
        secondary: "#717480",
      },
      light: {
        primary: "#ffffff",
        secondary: "#c4c9da",
      },
    },
    grey: ["#363b4e", "#373c4f", "#40465b", "#464c64", "#525972", "#636a84"],
  },
  typography: {
    fontPrimary: ["Rubik", "Arial", "Helvetica", "sans-serif"].join(", "),
    fontSecondary: ["Space Grotesk", "Arial", "Helvetica", "sans-serif"].join(
      ", ",
    ),
  },
  breakpoints: {
    xs: "@media (min-width: 320px)",
    sm: "@media (min-width: 480px)",
    md: "@media (min-width: 768px)",
    lg: "@media (min-width: 1280px)",
    xl: "@media (min-width: 1600px)",
  },
};

export type Theme = typeof theme;
