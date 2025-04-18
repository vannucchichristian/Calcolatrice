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
            // Coming soon...
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