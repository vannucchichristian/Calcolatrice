export default function handleInput(label, input, output, memory, setInput, setOutput, setMemory) {
    let newInput = input, newOutput = output, newMemory = memory;
    switch (label) {
        case 'C': {
            newInput = "";
            newOutput = "";
            break;
        }
        case '⌫': {
            newInput = input.slice(0, -1);
            break;
        }
        case '+':
        case '‒':
        case '×':
        case '÷': {
            if (input.length === 0) {
                // Aggiunge uno 0 prima degli operatori (escluso il ‒ che funziona come un numero negativo)
                newInput += (label === '‒') ? label : '0' + label;
            } else if (input.length === 1 && isOperator(input)) {
                // Se l'unico carattere inserito è un ‒ lavora come l'if precedente
                newInput = (label === '‒') ? label : '0' + label;
            } else if (input.length === 2 && isOperator(input.at(-1))) {
                // Elimina il costrutto dei due casi precedenti (0+, 0×, 0÷) se viene premuto il pulsante ‒
                newInput = (label === '‒' && input.at(-2) === '0') ? label : input.slice(0, -1) + label;
            } else if (isOperator(input.at(-1))) {
                // Per ogni altra lunghezza, se l'ultimo carattere è un operatore viene sostituito da quello nuovo
                newInput = input.slice(0, -1) + label;
            } else {
                // Altrimenti controlla se c'è un punto, eliminandolo se viene trovato
                newInput = (input.at(-1) === '.') ? input.slice(0, -1) + label : input + label;
            }
            break;
        }
        case '.': {
            if (input === '' || isOperator(input.at(-1))) {
                newInput += '0';  // Aggiunge uno 0 prima del punto all'inizio della stringa o se il carattere precedente è un operatore
            }
            // Cerca un punto all'interno dell'ultimo numero
            if (!(findLastNumber(input).includes('.'))) {
                newInput += label;  // Lo inserisce se non c'era già
            }
            break;
        }
        case '=': {
            if (input.at(-1) === '.') {
                newInput += '0';  // Aggiunge uno 0 se l'ultimo carattere è un . per rendere l'input più pulito
            }
            newOutput = roundResult(calculate(input));  // Rimuove eventuali imprecisioni al risultato dei floating point come 0.1+0.2
            break;
        }
        case 'M+':
        case 'M‒': {
            let result = calculate(memory + label.at(-1) + '(' + (input === '' ? 0.0 : input) + ')');
            newMemory = ((result === "Errore") ? memory : roundResult(result));
            break;
        }
        case 'MR': {
            if (isOperator(input.at(-1)) && memory < 0) {
                newInput = input.slice(0, -1);
            } else if (memory >= 0) {
                newInput = input.slice(0, input.length - findLastNumber(input).length);  // Elimina l'ultimo numero dall'input attuale
            }
            newInput += memory.replace(/-/g, '‒');
            break;
        }
        case 'MC': {
            newMemory = 0.0;
            break;
        }
        default: {
            if (findLastNumber(input).length < 15) {
                if (findLastNumber(input) === '0') {
                    newInput = input.slice(0, -1) + label;  // Se l'ultimo numero contiene un solo 0 lo sostituisce con il pulsante premuto
                } else {
                    newInput += label;
                }
            }
            break;
        }
    }
    setInput(newInput);
    setOutput(newOutput);
    setMemory(newMemory);
}

function calculate(input) {
    let result;
    try {
        let expression = input.replace(/‒/g, '-').replace(/×/g, '*').replace(/÷/g, '/');  // Sostituisce i caratteri della calcolatrice con quelli accettati dalla funzione eval
        result = eval(expression).toString();  // Esegue codice JavaScript passato come stringa
        if (result.includes("NaN") || result.includes("Infinity")) {
            result = "Errore";
        }
    } catch (e) {
        result = "Errore";
    }
    return result;
}

function roundResult(result) {
    if (result === "Errore") {
        return result;
    }
    // Arrotonda alla 15ª cifra decimale
    return (Math.round((parseFloat(result) + Number.EPSILON) * 1e15) / 1e15).toString();
}

function isOperator(char) {
    return ['+', '‒', '×', '÷'].includes(char);  // Controlla se il carattere passato è un operatore
}

function findLastNumber(input) {
    return input.split(/[+‒×÷]/).at(-1);  // Restituisce la parte di stringa successiva all'ultimo operatore
}