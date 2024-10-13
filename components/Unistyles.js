import { View } from "react-native";
import { createStyleSheet, UnistylesRegistry, useStyles } from 'react-native-unistyles';
import theme from "../themes/unistyles-theme";

UnistylesRegistry.addThemes({
    light: theme,
    dark: theme,
}).addConfig({
    initialTheme: "light",
});

const Demo = () => {
    const { styles } = useStyles(stylesheet)

    return (
        <View style={styles.container}>
            {new Array(1000).fill(0).map((_, i) => (
                <View
                    key={i}
                    style={styles.box}
                />
            ))}
        </View>
    )
};

const stylesheet = createStyleSheet(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    box: {
        borderColor: theme.colors.red,
        padding: theme.spacing.xs,
        borderWidth: 2
    }
}));

export default Demo;
