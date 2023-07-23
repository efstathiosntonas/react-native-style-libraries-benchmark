import { View } from "react-native";
import styled from "styled-components/native";

const StyledComponents = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(1000).fill(0).map((_, i) => (
        <StyledView key={i} />
      ))}
    </View>
  );
};

export default StyledComponents;

const StyledView = styled.View`
  border-color: red;
  border-width: 2px;
  padding: 5px;
`;
