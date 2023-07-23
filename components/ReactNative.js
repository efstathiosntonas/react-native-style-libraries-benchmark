import { StyleSheet, View } from "react-native";

const Native = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(1000).fill(0).map((_, i) => (
        <View key={i} style={styles.styledView} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  styledView: {
    borderColor: "red",
    borderWidth: 2,
    padding: 5,
  },
});

export default Native;
