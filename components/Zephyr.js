import { StyleProvider } from "react-native-zephyr";
import { View } from "react-native";
import { ZephyrStyledView } from "../styles/zephyr-styles";

export const Zephyr = () => {
  return (
    <StyleProvider>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(1000).fill(0).map((_, i) => (
          <ZephyrStyledView
            key={i}
            classes={["border:2", "p:1", "border-color:red-600"]}
          />
        ))}
      </View>
    </StyleProvider>
  );
};
