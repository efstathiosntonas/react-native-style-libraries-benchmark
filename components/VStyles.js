import { View } from "react-native";
import { COUNT } from "../utils";
import { sx, vx } from "../styles/v-styles";

const VStyles = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <View key={i} style={sx`bw-2 p-5 bc-red`} />
        // style={vx({ bc: "red", p: 5, bw: 2 })}
      ))}
    </View>
  );
};

export default VStyles;
