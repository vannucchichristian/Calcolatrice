import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/style';

export default function Button({ label, onClick }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};