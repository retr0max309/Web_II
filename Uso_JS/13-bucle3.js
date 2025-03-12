const datos = [
    {
        'materia' : 'Programacion Web',
        'calificacion' : 70
    },
    {
        'materia' : 'Base de Datos II',
        'calificacion' : 80
    },
    {
        'materia' : 'Ingles',
        'calificacion' : 90
    },
    {
        'materia' : 'Programacion III',
        'calificacion' : 100
    },
    {
        'materia' : 'Iot y Robotica',
        'calificacion' : 60
    },
    {
        'materia' : 'Programacion Movil',
        'calificacion' : 60
    },
    {
        'materia' : 'Base de Datos I',
        'calificacion' : 70
    },
    {
        'materia' : 'Programacion II',
        'calificacion' : 70
    },
    {
        'materia' : 'Programacion I',
        'calificacion' : 80
    },
    {
        'materia' : 'Electronica',
        'calificacion' : 100
    }
];
let materiaSeleccionada = '';
const notaAprogacion = 51;

for (let i = 0; i <datos.length && notaAprogacion==''; i ++){
    if (datos[i].calificacion <= notaAprogacion){
        materiaSeleccionada = datos[i].materia;
    }
}
if (materiaSeleccionada == ''){
    console.log('No hay materias aprobadas');
}
else {
    console.log('La materia aprobada es ' + materiaSeleccionada);
}