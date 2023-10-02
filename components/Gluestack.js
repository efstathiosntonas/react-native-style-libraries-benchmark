/* initialized with npx gluestack-ui@latest */
import { View } from "react-native";
import { createProvider } from "@gluestack-ui/provider";
import { StyledProvider } from "@gluestack-style/react";

import { config } from "../gluestack-ui.config";
import { styled } from "@gluestack-ui/themed";
import { COUNT } from "../utils";

const GluestackUIStyledProvider = createProvider({ StyledProvider });

const GluestackUIProvider = ({ children, ...props }) => {
  return (
    <GluestackUIStyledProvider {...props}>{children}</GluestackUIStyledProvider>
  );
};

const GluestackBox = styled(View, {
  p: 5,
  borderWidth: 2,
  borderColor: "$red600",
});

const Gluestack = () => {
  return (
    <GluestackUIProvider config={config.theme}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <GluestackBox key={i} />
        ))}
      </View>
    </GluestackUIProvider>
  );
};

export default Gluestack;
