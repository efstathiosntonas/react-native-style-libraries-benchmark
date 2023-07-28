import React from "react";
import { View } from "react-native";
import { Stack, TamaguiProvider } from "tamagui";

import config from "../tamagui.config";

const Tamagui = () => {
  return (
    <TamaguiProvider config={config}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(1000).fill(0).map((_, i) => (
          <Stack borderColor="red" borderWidth={2} key={i} padding={5} />
        ))}
      </View>
    </TamaguiProvider>
  );
};

export default Tamagui;
