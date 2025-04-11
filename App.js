import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';
import styles from './styles/style';

var memory = 0.0;

const buttonLayout = [
  [null, null, 'C', '⌫'],
  ['M+', 'M-', 'MR', 'MC'],
  ['7', '8', '9', '+'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '×'],
  ['.', '0', '=', '÷'],
];

export default function App() {
  return (
    <View style={styles.buttonContainer}>
      {buttonLayout.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((btn, index) => {
            if (!btn) return (<View key={index} style={styles.buttonEmpty} />);
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
}