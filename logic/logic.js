export default function handleInput(label, input, output, setInput, setOutput) {
    let newInput = input, newOutput = output;
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
            //Sostituisce l'ultimo carattere se è un operatore
            newInput = ['+', '‒', '×', '÷'].includes(input.at(-1))
                       ? input.slice(0, -1) + label
                       : input + label;
            break;
        }
        case '.': {
            if (input === '' || ['+', '‒', '×', '÷'].includes(input.at(-1))) {
                newInput += '0';  // Aggiunge uno 0 prima del punto all'inizio della stringa o se il carattere precedente è un operatore
            }
            // Cerca un punto all'interno dell'ultimo numero
            if (!(findLastNumber(input).includes('.'))) {
                newInput += label;  // Lo inserisce se non c'era già
            }
            break;
        }
        case '=': {
            try {
                let expression = input.replace(/‒/g, '-').replace(/×/g, '*').replace(/÷/g, '/');  // Sostituisce i caratteri della calcolatrice con quelli accettati dalla funzione eval
                newOutput = "= " + eval(expression);  // Esegue codice JavaScript passato come stringa
                if (newOutput.includes("NaN") || newOutput.includes("Infinity")) throw new Error();
            } catch (e) {
                newOutput = "Errore";
            }
            break;
        }
        case 'M+':
        case 'M‒':
        case 'MR':
        case 'MC': {
            // Coming soon...
            break;
        }
        default: {
            newInput += label;
            break;
        }
    }
    setInput(newInput);
    setOutput(newOutput);
}

function findLastNumber(input) {
    return input.split(/[+‒×÷]/).at(-1);  // Restituisce la parte di stringa successiva all'ultimo operatore
}