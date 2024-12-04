import { UnistylesRegistry } from "react-native-unistyles";

const palette = {
  red: "red",
}

const theme = {
  colors: {
    red: palette.red,
  },
  spacing: {
    xs: 5,
    s: 10,
    m: 16,
    l: 24,
    xl: 40,
  },
};

UnistylesRegistry.addThemes({
  light: theme,
  dark: theme,
}).addConfig({
  initialTheme: "light",
});
