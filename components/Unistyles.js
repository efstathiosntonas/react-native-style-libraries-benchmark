import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStyleSheet, UnistylesProvider, useStyles } from 'react-native-unistyles';

const Demo = () => {
    const { styles } = useStyles(stylesheet);
    return (
        <View style={styles.container}>
            {new Array(1000).fill(0).map((_, i) => (
                <TouchableOpacity
                    key={i}
                    onPress={() => alert(`Item ${i} clicked!`)}
                    style={styles.touchable}
                >
                    <View style={[styles.box, i % 2 === 0 ? styles.blueBackground : styles.grayBackground]}>
                        <Text style={styles.title}>Item {i}</Text>
                        <Text style={styles.body}>This is static content</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const stylesheet = createStyleSheet(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    touchable: {
        margin: 5,
    },
    box: {
        borderColor: theme.colors.red,
        padding: theme.spacing.s,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blueBackground: {
        backgroundColor: 'blue',
    },
    grayBackground: {
        backgroundColor: 'gray',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
    },
}));

export default () => (
    <UnistylesProvider>
        <Demo />
    </UnistylesProvider>
)
