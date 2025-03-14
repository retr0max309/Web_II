function decimalABinary(decimal) {
    if (decimal === 0) {
        return '0';
    }
    
    let binario = '';
    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }
    
    return binario;
}

const numeroDecimal = 10;
const numeroBinario = decimalABinary(numeroDecimal);
console.log(`El número ${numeroDecimal} en binario es ${numeroBinario}`);