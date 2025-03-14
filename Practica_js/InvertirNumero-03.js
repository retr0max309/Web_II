
function invertirNumero(num) {
    return parseInt(num.toString().split('').reverse().join('')) 
}

const numero = 12345;
const numeroInvertido = invertirNumero(numero);
console.log('numero invertido es: ' + numeroInvertido);