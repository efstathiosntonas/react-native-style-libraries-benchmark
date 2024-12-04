import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { sx, vx } from "../styles/v-styles";
import { COUNT } from "../utils";

const VStyles = () => {
  return (
    <View style={[sx`d-flex fd-row fw-wrap`, { justifyContent: "space-around" }]}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Item ${i} clicked!`)}
          style={sx`m-5`}
        >
          <View
            style={vx({
              bg: i % 2 === 0 ? "blue" : "gray",
              jc: "center",
              ai: "center",
              bc: "red",
              bw: 2,
              p: 10,
            })}
          >
            <Text style={vx({ fts: 20, ftw: "bold" })}>Item {i}</Text>
            <Text style={sx`fts-14`}>This is static content</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default VStyles;
