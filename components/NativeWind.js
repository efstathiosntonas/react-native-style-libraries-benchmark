import { View } from "react-native";
import { COUNT } from "../utils";

const NativeWind = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <View key={i} className="border-2 p-1.5 border-red-600" />
      ))}
    </View>
  );
};

export default NativeWind;
