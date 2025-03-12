// funcion para invertir numero
function invertirNumero(num) {
    // convertir el numero a cadena dividirlo entre caracteres, invertirlo y unirlo
    // Luego, convertimos la cadena invertida de nuevo a un número entero
    return parseInt(num.toString().split('').reverse().join('')) 
}

// defino un numero para despues invertirlo
const numero = 12345;

// llamo a la funcion para invertir mi numero definido
const numeroInvertido = invertirNumero(numero);

// mandarlo a imprimir
console.log('El número invertido es: ' + numeroInvertido);