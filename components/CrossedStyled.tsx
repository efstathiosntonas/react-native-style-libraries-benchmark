import React, { View } from "react-native";
import { Registry } from "@crossed/styled/lib/commonjs/Registry";
import { BasePlugin } from "@crossed/styled/plugins";
import { createStyles, useStyles } from "@crossed/styled/lib/commonjs/index";
import { COUNT } from "../utils";
Registry.addPlugin(BasePlugin);

const styleSheet = createStyles({
  root: {
    base: { borderColor: "red", borderWidth: 2, padding: 5 },
  },
});

const CrossedStyled = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <Demo key={i} />
      ))}
    </View>
  );
};

function Demo () {
  const { root } = useStyles(styleSheet);
  return <View {...root} />
}

export default CrossedStyled;
