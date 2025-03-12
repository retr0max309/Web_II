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

const notaAprobacion = 71;

let materiaSeleccionada = '';
let i = 0;

do {
    if (datos[i].calificacion <= notaAprobacion) {
        materiaSeleccionada = datos[i].materia;
        break;
    }
    i++;
} while (i < datos.length && materiaSeleccionada == '');

if (materiaSeleccionada==''){
    console.log('No hay materias aprobadas');
}
else {
    console.log('La materia aprobada es: ' + materiaSeleccionada);
}