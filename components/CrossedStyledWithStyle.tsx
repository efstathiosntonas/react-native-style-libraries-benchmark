import React, { View } from "react-native";
import { Registry } from "@crossed/styled/lib/commonjs/Registry";
import { BasePlugin } from "@crossed/styled/plugins";
import { withStyle } from "@crossed/styled/lib/commonjs/index";
import { COUNT } from "../utils";
Registry.addPlugin(BasePlugin);

const Box = withStyle(View, {
  base: { borderColor: "red", borderWidth: 2, padding: 5 },
})

const CrossedStyled = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <Box key={i} />
      ))}
    </View>
  );
};

export default CrossedStyled;
