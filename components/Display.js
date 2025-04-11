import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/style';

export default function Display({ input, output }) {
    return (
        <View style={styles.display}>
            <Text style={styles.inputText}>{input}</Text>
            <Text style={styles.outputText}>{output}</Text>
        </View>
    );
};