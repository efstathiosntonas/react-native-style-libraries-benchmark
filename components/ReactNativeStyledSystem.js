import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyledSystemProvider, useSx } from "@react-native-styled-system/core";
import { COUNT } from "../utils";

const theme = {
  colors: {
    red: "red",
    blue: "blue",
    gray: "gray",
  },
  space: { s: 10 },
  sizes: {},
  radii: {},
  typography: {},
};

const StyledView = (props) => {
  const { getStyle, filteredProps } = useSx(props);
  return <View style={getStyle()} {...filteredProps} />;
};

const StyledText = (props) => {
  const { getStyle, filteredProps } = useSx(props);
  return <Text style={getStyle()} {...filteredProps} />;
};

const ReactNativeStyledSystem = () => {
  return (
    <StyledSystemProvider theme={theme}>
      <View style={styles.container}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => alert(`Item ${i} clicked!`)}
            style={styles.touchable}
          >
            <StyledView
              borderColor={"red"}
              borderWidth={2}
              p={"s"}
              justifyContent={"center"}
              alignItems={"center"}
              bg={i % 2 === 0 ? "blue" : "gray"}
            >
              <StyledText fontSize={24} fontWeight={"bold"}>
                Item {i}
              </StyledText>
              <StyledText fontSize={16} lineHeight={24}>
                This is static content
              </StyledText>
            </StyledView>
          </TouchableOpacity>
        ))}
      </View>
    </StyledSystemProvider>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  touchable: {
    margin: 5,
  },
};

export default ReactNativeStyledSystem;
