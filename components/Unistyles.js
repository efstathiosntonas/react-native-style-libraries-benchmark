import { View } from "react-native";
import { UnistylesTheme, createUnistyles } from 'react-native-unistyles';
import theme from "../themes/unistyles-theme";

const breakpoints = {
    xs: 0,
    sm: 200,
    md: 500
};

const {
    createStyles,
    useStyles
} = createUnistyles(breakpoints);

const Unistyles = () => {
    return (
        <UnistylesTheme theme={theme}>
            <Demo />
        </UnistylesTheme>
    )
};

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

const stylesheet = createStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    box: {
        borderColor: theme.colors.red,
        padding: 5,
        borderWidth: 2
    }
}));

export default Unistyles;
