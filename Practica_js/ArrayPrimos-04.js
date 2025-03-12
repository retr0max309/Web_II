// funcion para verificar si el numero es primo 
function esPrimo(num) {
    //  numeros menores o iguales a 1 no son primos
    if (num <= 1) return false;
    
    // Iteramos desde 2 hasta el número anterior a num
    // Si encontramos un divisor el numero no es primo
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    
    // Si no encontramos divisores el numero es primo 
    return true;
}

// Definimos un array de números
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usamos el método filter para obtener solo los números primos del array
let primos = array.filter(esPrimo);

// Imprimimos el array original
console.log("El array es: " + array);

// Imprimimos los números primos encontrados
console.log("Los números primos son: " + primos);