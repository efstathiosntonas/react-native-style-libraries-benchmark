import { createTheme } from "@shopify/restyle";

const palette = {
  red: "#FF0000",
  blue: "#0000FF",
  gray: "#808080",
};

const theme = createTheme({
  colors: {
    red: palette.red,
    blue: palette.blue,
    gray: palette.gray,
  },
  spacing: {
    xs: 5,
    s: 10,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  },
});

export default theme;
