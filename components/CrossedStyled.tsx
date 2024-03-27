import React, { View } from "react-native";
import { Registry } from "@crossed/styled/registry";
import { BasePlugin } from "@crossed/styled/plugins";
import { createStyles, useStyles } from "@crossed/styled";
import { COUNT } from "../utils";
Registry.addPlugin(BasePlugin);

const styleSheet = createStyles({
  root: {
    base: { borderColor: "red", borderWidth: 2, padding: 5 },
  },
});

const CrossedStyled = () => {
  const { root, ...other } = useStyles(styleSheet);
  console.log(root, other)
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <View key={i} {...root} />
      ))}
    </View>
  );
};

export default CrossedStyled;
