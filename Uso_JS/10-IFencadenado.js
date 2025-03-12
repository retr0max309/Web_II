const ciudadDestino = "Sucre";
const ciudadesDisponibles = new Array("Santiago", "Bogota", "Lima", "Monte Video");

let edadPasajero = 17;
let compania = false;

if (edadPasajero >=18 || compania) {
    console.log('Pasaje disponible');
} else {
    if(edadPasajero>=16 && ciudadDestino === "Sucre") {
        console.log('Pasaje disponible');
    } else {
        console.log('Pasaje no cumple con los requisitos');
    }
}
