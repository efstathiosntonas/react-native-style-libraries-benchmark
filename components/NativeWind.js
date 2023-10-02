import { View } from "react-native";
import { styled } from "nativewind";
import { COUNT } from "../utils";

const StyledView = styled(View, "border-2 p-1.5 border-red-600");

const NativeWind = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <StyledView key={i} />
      ))}
    </View>
  );
};

export default NativeWind;
