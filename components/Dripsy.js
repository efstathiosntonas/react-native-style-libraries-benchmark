import { View as ViewD, Text, DripsyProvider, makeTheme } from "dripsy";
import { View, TouchableOpacity } from "react-native";
import React from "react";
import { COUNT } from "../utils";

const theme = makeTheme({
  colors: {
    $primary: 'blue',
    $secondary: 'gray',
  },
  text: {
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  },
});

const Dripsy = () => {
  return (
    <DripsyProvider theme={theme}>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: "space-around" }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => alert(`Item ${i} clicked!`)}
          >
            <ViewD
              sx={{
                borderColor: "red",
                borderWidth: 2,
                padding: 10,
                margin: 5,
                backgroundColor: i % 2 === 0 ? "$primary" : "$secondary",
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text variant="text.title">Item {i}</Text>
              <Text variant="text.body">This is static content</Text>
            </ViewD>
          </TouchableOpacity>
        ))}
      </View>
    </DripsyProvider>
  );
};

export default Dripsy;
