import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { COUNT } from "../utils";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledBox = styled.View`
  border-color: red;
  border-width: 2px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.even ? 'blue' : 'gray')};
`;

const StyledTextTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const StyledTextBody = styled.Text`
  font-size: 16px;
  line-height: 24px;
`;

const StyledComponents = () => {
  return (
    <Container>
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          style={{ margin: 5 }}
          onPress={() => alert(`Item ${i} clicked!`)}
        >
          <StyledBox even={i % 2 === 0}>
            <StyledTextTitle>Item {i}</StyledTextTitle>
            <StyledTextBody>This is static content</StyledTextBody>
          </StyledBox>
        </TouchableOpacity>
      ))}
    </Container>
  );
};

export default StyledComponents;
