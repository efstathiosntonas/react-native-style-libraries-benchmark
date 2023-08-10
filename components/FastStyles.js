import { View } from "react-native";
import { styled } from "@fast-styles/react";

const FastStylesView = styled(View, {
  borderColor: "red",
  borderWidth: 2,
  padding: 5,
});

const FastStyles = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(1000).fill(0).map((_, i) => (
        <FastStylesView key={i} />
      ))}
    </View>
  );
};

export default FastStyles;
