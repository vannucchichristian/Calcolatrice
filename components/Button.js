import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/style';

export default function Button({ label, onClick }) {
    const isOperator = ['+', '‒', '×', '÷'].includes(label);
    const isEquals = (label === "=");
    const isClear = ['C', '⌫'].includes(label);
    const isMemory = label.includes('M');  // Gli unici pulsanti che contengono il carattere M sono quelli della memoria

    return (
        <TouchableOpacity
            onPress={onClick}
            style={[
                styles.button,
                isEquals && styles.equalsBackground,
            ]}>
            <Text style={[
                styles.buttonText,
                isOperator && styles.operatorText,
                isClear && styles.clearText,
                isMemory && styles.memoryText,
            ]}
            >{label}</Text>
        </TouchableOpacity>
    );
};