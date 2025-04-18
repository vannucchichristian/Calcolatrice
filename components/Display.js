import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/style';

export default function Display({ input, output }) {
    const inputScrollRef = useRef(null);  // Gestisce lo scorrimento automatico dell'area di input

    useEffect(() => {
        if (inputScrollRef.current) {
            inputScrollRef.current.scrollToEnd({ animated: true });  // Scorre automaticamente all'ultima riga ogni volta che la precedente viene riempita
        }
    }, [input]);

    return (
        <View style={styles.display}>
            <View>
                {/* Visualizza i testi in un'area "scrollabile" */}
                <ScrollView
                    ref={inputScrollRef}
                    style={{
                        maxHeight: 150,
                        alignSelf: 'stretch',
                    }}
                    contentContainerStyle={{ paddingVertical: 4 }}
                ><Text
                        style={[
                            styles.inputText,
                            { textAlign: 'right' },
                        ]}
                    >{input}
                    </Text>
                </ScrollView>
                <ScrollView
                    style={{ maxHeight: 60 }}
                    contentContainerStyle={{ paddingVertical: 4 }}
                ><Text
                        style={[
                            styles.outputText,
                            { textAlign: 'right' },
                        ]}
                    >{output}
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
};