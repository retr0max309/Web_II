const datos=[
    {
        'materia':'Programacion web',
        'calificacion': 70
    },
    {
        'materia':'base de datos II',
        'calificacion': 70
    },
    {
        'materia':'robotica',
        'calificacion':60
    },
    {
        'materia':'ingles',
        'calificacion':90
    },
    {
        'materia':'programacion III',
        'calificacion':80
    },
    {
        'materia':'programacion movil',
        'calificacion':50
    },
    {
        'materia':'animacion',
        'calificacion':50
    },
    {
        'materia':'matematica',
        'calificacion':70
    },
    {
        'materia':'electronica',
        'calificacion':50
    },
    {
        'materia':'programacion I',
        'calificacion':70
    }
];
const procesarDatos = datos =>{
    return datos
        .filter(datos => datos.calificacion >51)
        .map(datos => {
            const {materia}=materia;
            return materia.length >5 ? materia.toUpperCase() : materia.toLowerCase();
        });
}
const resultado = procesarDatos(datos);
console.log(resultado);