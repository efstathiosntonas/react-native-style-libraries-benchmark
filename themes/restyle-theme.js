import { createTheme } from "@shopify/restyle";

const palette = {
  red: "#FF0000",
};

const theme = createTheme({
  colors: {
    red: palette.red,
  },
  spacing: {
    xs: 5,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
});

export default theme;
