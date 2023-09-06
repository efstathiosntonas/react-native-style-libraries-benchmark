import { View } from "react-native";

const StyledView = () => <View className="border-2 p-1.5 border-red-600" />;

const NativeWind = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(1000).fill(0).map((_, i) => (
        <View className="border-2 p-1.5 border-red-600" key={i} />
      ))}
    </View>
  );
};

export default NativeWind;
