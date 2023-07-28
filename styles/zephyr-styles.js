import { View } from "react-native";
import { createStyleBuilder } from "react-native-zephyr";

export const { styles, makeStyledComponent } = createStyleBuilder();

export const ZephyrStyledView = makeStyledComponent(View);
