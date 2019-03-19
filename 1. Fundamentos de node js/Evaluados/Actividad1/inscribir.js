//Se realiza el proceso de inscripcion de un estudiante 
const opciones = {
    idCurso: {
        default: true,
        alias: "i"
    },
    nombre: {
        default: true,
        alias: "n"
    },
    cedula: {
        demand: true,
        alias: "c"
    }
}
const argv = require('yargs')
    .command("inscribir", "Inscribir estudiante:", opciones)
    .argv;

    module.exports = {
        opciones,
        argv
    };