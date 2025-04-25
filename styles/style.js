import { StyleSheet } from 'react-native';

// Costanti per i colori
const bgColors = {
    background: "#222",
    classic: "#333",
    equals: "#008fff",
};
const textColors = {
    classic: "#fff",
    output: "#aaa",
    operators: "#008fff",
    clear: "#ff2c2c",
    memory: "#32cd32",
};

const styles = StyleSheet.create({
    // Layout flexbox per i pulsanti
    buttonContainer: {
        flex: 1,
        backgroundColor: bgColors["background"],
        justifyContent: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
    },

    // Stile dei pulsanti
    button: {
        backgroundColor: bgColors["classic"],
        flex: 1,
        margin: 5,
        height: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    equalsBackground: {
        backgroundColor: bgColors["equals"],
    },
    buttonText: {
        color: textColors["classic"],
        fontSize: 28,
    },
    operatorText: {
        color: textColors["operators"],
    },
    clearText: {
        color: textColors["clear"],
    },
    memoryText: {
        color: textColors["memory"],
    },
    noButton: {
        flex: 1,
        height: 70,
    },

    // Stile del display
    display: {
        padding: 20,
        alignItems: 'flex-end',
    },
    inputText: {
        color: textColors["classic"],
        fontSize: 45,
    },
    outputText: {
        color: textColors["output"],
        fontSize: 28,
        marginTop: 5,
    },
    memoryContainer: {
        position: 'absolute',
        top: -20,
        left: 20,
    },
    memoryLabel: {
        fontSize: 16,
        color: textColors["memory"],
    },
});

export default styles;