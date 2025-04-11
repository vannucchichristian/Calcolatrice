import { StyleSheet } from 'react-native';

// Costanti per i colori
const bgColor = "#222";
const buttonBgColor = "#333";
const textColors = {
    classic: "#fff",
    output: "#aaa",
};

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        backgroundColor: bgColor,
        justifyContent: 'flex-end',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 5,
    },
    button: {
        backgroundColor: buttonBgColor,
        flex: 1,
        margin: 5,
        height: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
      color: textColors["classic"],
      fontSize: 28,
    },
    buttonEmpty: {
      flex: 1,
    },
    inputText: {
        color: textColors["classic"],
        fontSize: 45,
    },
    outputText: {
        color: textColors["output"],
        fontSize: 30,
        marginTop: 5,
    },
    display: {
        padding: 20,
        alignItems: 'flex-end',
    }
});

export default styles;