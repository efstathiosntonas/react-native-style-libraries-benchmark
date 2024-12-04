import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createBox, createText, ThemeProvider } from "@shopify/restyle";
import theme from "../themes/restyle-theme";
import { COUNT } from "../utils";

const Box = createBox();
const RestyleText = createText();

const Restyle = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => alert(`Item ${i} clicked!`)}
            style={styles.touchable}
          >
            <Box
              padding="s"
              borderColor="red"
              borderWidth={2}
              justifyContent="center"
              alignItems="center"
              backgroundColor={i % 2 === 0 ? "blue" : "gray"}
            >
              <RestyleText variant="title">Item {i}</RestyleText>
              <RestyleText variant="body">This is static content</RestyleText>
            </Box>
          </TouchableOpacity>
        ))}
      </View>
    </ThemeProvider>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  touchable: {
    margin: 5,
  },
};

export default Restyle;
