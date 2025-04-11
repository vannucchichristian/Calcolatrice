import { StyleSheet } from 'react-native';

// Costanti per i colori
const bgColor = "#222";
const buttonBgColor = "#333";
const buttonTextColor = "#fff";

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        backgroundColor: bgColor,
        alignItems: 'center',
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
      color: buttonTextColor,
      fontSize: 28,
    },
    buttonEmpty: {
      flex: 1,
    },
});

export default styles;