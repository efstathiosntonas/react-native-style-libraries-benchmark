import { StyleSheet, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);

const NativeWind = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(1000).fill(0).map((_, i) => (
        <StyledView key={i} style={styles.styledView} />
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

export default NativeWind;
