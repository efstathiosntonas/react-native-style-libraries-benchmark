import React from "react";
import { View } from "react-native";
import { TamaguiProvider } from "@tamagui/core";
import { styled } from "tamagui";

import config from "../tamagui.config";

const TamaguiView = styled(View, {
  name: "TamaguiView",
  padding: 5,
  borderColor: "red",
  borderWidth: 2,
});

const Tamagui = () => {
  return (
    <TamaguiProvider config={config}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(1000).fill(0).map((_, i) => (
          <TamaguiView key={i} />
        ))}
      </View>
    </TamaguiProvider>
  );
};

export default Tamagui;
