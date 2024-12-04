import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from "@fast-styles/react";
import { COUNT } from "../utils";

const FastStylesView = styled(View, {
  borderColor: "red",
  borderWidth: 2,
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    mode: {
      blue: {
        backgroundColor: "blue",
      },
      gray: {
        backgroundColor: "gray",
      },
    },
  },
});

const StyledTextTitle = styled(Text, {
  fontSize: 24,
  fontWeight: 'bold',
});

const StyledTextBody = styled(Text, {
  fontSize: 16,
  lineHeight: 24,
});

const FastStyles = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Item ${i} clicked!`)}
          style={{ margin: 5 }}
        >
          <FastStylesView mode={i % 2 === 0 ? 'blue' : 'gray'}>
            <StyledTextTitle>Item {i}</StyledTextTitle>
            <StyledTextBody>This is static content</StyledTextBody>
          </FastStylesView>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FastStyles;
