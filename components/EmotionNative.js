import React from "react";
import { View, TouchableOpacity } from "react-native";
import styled from "@emotion/native";
import { COUNT } from "../utils";

const EmotionNative = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Item ${i} clicked!`)}
          style={{ margin: 5 }}
        >
          <StyledView backgroundColor={i % 2 === 0 ? 'blue' : 'gray'}>
            <StyledTextTitle>Item {i}</StyledTextTitle>
            <StyledTextBody>This is static content</StyledTextBody>
          </StyledView>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default EmotionNative;

const StyledView = styled.View`
  border-color: red;
  border-width: 2px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;

const StyledTextTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const StyledTextBody = styled.Text`
  font-size: 16px;
  line-height: 24px;
`;
