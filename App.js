import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";

import Native from "./components/ReactNative";
import NativeWind from "./components/NativeWind";
import Restyle from "./components/Restyle";
import StyledComponents from "./components/StyledComponents";
import Tamagui from "./components/Tamagui";
import EmotionNative from "./components/EmotionNative";

export default function App() {
  const [styleType, setStyleType] = useState(undefined);

  const onStyleTypePress = (curry) => () => {
    setStyleType(curry);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case "React Native":
        return <Native />;
      case "Styled Components":
        return <StyledComponents />;
      case "Tamagui":
        return <Tamagui />;
      case "Restyle":
        return <Restyle />;
      case "NativeWind":
        return <NativeWind />;
      case "Emotion Native":
        return <EmotionNative />;
      default:
        return null;
    }
  };

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Tap a style library to start rendering</Text>
      <Button title="React Native" onPress={onStyleTypePress("React Native")} />
      <Button
        title="Styled Components"
        onPress={onStyleTypePress("Styled Components")}
      />
      <Button title="Tamagui" onPress={onStyleTypePress("Tamagui")} />
      <Button title="Restyle" onPress={onStyleTypePress("Restyle")} />
      <Button title="NativeWind" onPress={onStyleTypePress("NativeWind")} />
      <Button title="Emotion Native" onPress={onStyleTypePress("Emotion Native")} />
      {styleType ? <Text>Rendering with {styleType}</Text> : null}
      {renderStyleLibrary()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
