import React from "react";
import { StyleProvider } from "react-native-zephyr";
import { View, Text, TouchableOpacity } from "react-native";
import { ZephyrStyledView } from "../styles/zephyr-styles";
import { COUNT } from "../utils";

export const Zephyr = () => {
  return (
    <StyleProvider>
      <View style={styles.container}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => alert(`Item ${i} clicked!`)}
            style={styles.touchable}
          >
            <ZephyrStyledView
              classes={[
                "border:2",
                "p:2.5",
                "justify-center",
                "items-center",
                "rounded:lg",
                i % 2 === 0 ? "bg:blue-500" : "bg:gray-500",
              ]}
            >
              <Text style={styles.title}>Item {i}</Text>
              <Text style={styles.body}>This is static content</Text>
            </ZephyrStyledView>
          </TouchableOpacity>
        ))}
      </View>
    </StyleProvider>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  touchable: {
    margin: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "black",
  },
};

export default Zephyr;
