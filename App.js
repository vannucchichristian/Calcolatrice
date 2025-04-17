import { View } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';
import styles from './styles/style';

let memory = 0.0;

const buttonLayout = [
    ['C', '⌫'],
    ['M+', 'M‒', 'MR', 'MC'],
    ['7', '8', '9', '+'],
    ['4', '5', '6', '‒'],
    ['1', '2', '3', '×'],
    ['.', '0', '=', '÷'],
];

export default function App() {
    return (
        <View style={styles.buttonContainer}>
            <Display input={"3+7"} output={"= 10"} />
            {buttonLayout.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((btn, index) => {
                        if (!btn) return (<View key={index} style={styles.noButton} />);
                        return (
                            <Button
                                key={index}
                                label={btn}
                                onPress={null}
                            />
                        );
                    })}
                </View>
            ))}
        </View>
    );
};