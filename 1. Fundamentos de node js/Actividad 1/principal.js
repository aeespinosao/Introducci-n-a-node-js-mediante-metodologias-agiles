const cursos = require('./datos').datos;
const opciones = require('./opciones').opciones;
const fs = require('fs');
const argv = require('yargs')
    .command('inscribir', 'Inscribirse a un curso', opciones).argv;


let mostrarCursos = () => {
    cursos.forEach((curso, index) => {
        setTimeout(() => {
            console.log(`\nIdentificador: ${curso.id}\nTitulo: ${curso.nombre}\nDescripción: ${curso.descripcion}\nDuración: ${curso.duracion}\nInversión: ${curso.valor}`);
        }, index * 2000);
    });
}


if (argv._[0] === 'inscribir') {
    let curso = cursos.find(curso => curso.id == argv.c);
    if (curso) {
        texto = `El estudiante ${argv.n} con documento ${argv.d} se encuentra inscrito en el curso ${curso.nombre} identificado con id ${curso.id} con una duración de ${curso.duracion}`;
        fs.writeFile(`${curso.id}-${curso.nombre}_${argv.d}-${argv.n}.txt`, texto, (err) => {
            if (err) throw (err);
            console.log(`Se ha inscrito el estudiante ${argv.d}-${argv.n} al curso:\nTitulo: ${curso.nombre}\nDescripción: ${curso.descripcion}\nDuración: ${curso.duracion}\nInversión: ${curso.valor}`);
        })
    } else {
        console.log('Curso no encontrado, favor verificar el identificador del curso');
        mostrarCursos();
    }
} else {
    mostrarCursos();
}