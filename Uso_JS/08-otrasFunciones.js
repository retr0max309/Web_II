const  ciudadesDisponibles = new Array ("Santiago", "Bogota","Lima","MonteVideo");
const paisesDisponibles = new Array ("Chile", "Colombia", "Peru", "Uruguay");
const cantidadCiudades = ciudadesDisponibles.length; // .lenthg sirve para contar

ciudadesDisponibles.shift
console.log(`En la lista existen ${paisesDisponibles.length} elementos`)
console.log(ciudadesDisponibles)
//quitar el ultimo elemento del array

ciudadesDisponibles.pop()
console.log(`En la lista existen ${paisesDisponibles.length} elementos`)
console.log(ciudadesDisponibles)
//quitar el primero? elemento del array

//ordenar lista
console.log(ciudadesDisponibles.sort());

//posicion de un elemento
console.log(paisesDisponibles.indexOf("Peru"));1

//concatenar 2 listas 
const listaPaisesCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesCiudades);