
function esPrimo(num) {

    if (num <= 1) return false;
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let primos = array.filter(esPrimo);


console.log("El array es: " + array);


console.log("Los números primos son: " + primos);