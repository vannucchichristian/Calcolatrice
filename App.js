import React, { useState } from 'react';
import { View } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';
import styles from './styles/style';
import handleInput from './logic/logic';

const buttonLayout = [
    ['C', '⌫'],
    ['M+', 'M‒', 'MR', 'MC'],
    ['7', '8', '9', '+'],
    ['4', '5', '6', '‒'],
    ['1', '2', '3', '×'],
    ['.', '0', '=', '÷'],
];

export default function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [memory, setMemory] = useState(0.0);

    return (
        <View style={styles.buttonContainer}>
            <Display input={input} output={output} memory={memory} />
            {buttonLayout.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((btn, index) => {
                        if (!btn) return (<View key={index} style={styles.noButton} />);
                        const onClick = () => handleInput(btn, input, output, memory, setInput, setOutput, setMemory);  // Funzione lambda che evita il passaggio dei parametri a Button.js
                        return (
                            <Button
                                key={index}
                                label={btn}
                                onClick={onClick}  // Al pulsante viene passata una costante che contiene una funzione, lasciando i parametri solo in App.js e logic.js
                            />
                        );
                    })}
                </View>
            ))}
        </View>
    );
};