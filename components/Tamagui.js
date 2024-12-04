import React from "react";
import { View } from "react-native";
import { Stack, Text, TamaguiProvider } from "tamagui";
import { COUNT } from "../utils";

import config from "../tamagui.config";

const Tamagui = () => {
  return (
    <TamaguiProvider config={config}>
      <View style={styles.container}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Stack
            key={i}
            borderColor="red"
            borderWidth={2}
            padding={10}
            justifyContent="center"
            alignItems="center"
            backgroundColor={i % 2 === 0 ? "blue" : "gray"}
            onPress={() => alert(`Item ${i} clicked!`)}
            pressStyle={{ backgroundColor: 'lightgray' }}
            style={styles.pressable}
          >
            <Text style={styles.title}>Item {i}</Text>
            <Text style={styles.body}>This is static content</Text>
          </Stack>
        ))}
      </View>
    </TamaguiProvider>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  pressable: {
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
};

export default Tamagui;
