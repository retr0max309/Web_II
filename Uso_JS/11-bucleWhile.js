const ciudadesDisponibles = new Array("Santiago", "Bogota", "Lima", "Monte Video");
const precioPasaje = new Array (100, 200, 300, 400);
const presuDisponible = 210;
let i=0;

while (precioPasaje[i]>presuDisponible && i<ciudadesDisponibles.length){
    i++;
}
if (i== ciudadesDisponibles.length){
    console.log('No hay pasajes disponibles');
}
else{
    console.log("Se puede comprar un pasaje a " + ciudadesDisponibles[i] + " por " + precioPasaje[i]);
}