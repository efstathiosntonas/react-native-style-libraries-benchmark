import { View } from "react-native";
import { COUNT } from "../utils";

const NativeWind = ({ className, ...props }) => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }} className={className} {...props}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <View className="border-2 p-1.5 border-red-600" key={i} />
      ))}
    </View>
  );
};

export default NativeWind;
