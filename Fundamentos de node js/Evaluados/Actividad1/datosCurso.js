//Se imprimen los cursos disponibles
//Se valida si se quiere inscribir un estudiante
//Se crea el archivo de texto
const { cursos } = require('./cursos');
const fs = require('fs');
const { argv } = require('./inscribir');

//Si no se ingresa la palabra "incribir" solo se listan los cursos disponibles
if (argv._[0] != 'inscribir') {
    function imprimirCurso1(cursos) {
        setTimeout(function () {
            console.log("Datos del curso: ")
            console.log("El id del curso es el " + cursos[0].idCurso + ", el curso se llama "
                + cursos[0].nombre + ", tiene una duracion de " + cursos[0].duracion
                + " y tiene un valor de " + "$" + cursos[0].valor);
        }, 2000);
    };

    function imprimirCurso2(cursos) {
        setTimeout(function () {
            console.log("Datos del curso: ")
            console.log("El id del curso es el " + cursos[1].idCurso + ", el curso se llama "
                + cursos[1].nombre + ", tiene una duracion de " + cursos[1].duracion
                + " y tiene un valor de " + "$" + cursos[1].valor);
        }, 4000);
    };

    function imprimirCurso3(cursos) {
        setTimeout(function () {
            console.log("Datos del curso: ")
            console.log("El id del curso es el " + cursos[2].idCurso + ", el curso se llama "
                + cursos[2].nombre + ", tiene una duracion de " + cursos[2].duracion
                + " y tiene un valor de " + "$" + cursos[2].valor);
        }, 6000);
    };

    imprimirCurso1(cursos)
    imprimirCurso2(cursos)
    imprimirCurso3(cursos)
}//Si se ingresa la palabra "inscribir" se ingresa la informacion
else {
    console.log(argv)
    //Se busca el id ingresado
    let informacionCurso = cursos.find(function(informacionCurso){
        return informacionCurso.idCurso == argv.idCurso
    })
    //Se valida que el id si exista 
    if(informacionCurso != null){
        console.log("\nLos datos del curso encontrado son: ")
    console.log(informacionCurso)
    }else{
        console.log("\nNo se encontro informacion con el id ingresado")
    }
    //Se crea el archivo de texto solo si existe el id ingresado
    let crearArchivo = (argv) => {
        if (informacionCurso != null) {
            texto = "El estudiante: " + argv.nombre + " con numero cedula: " + argv.cedula +
            "\nSe inscribio al curso: " + informacionCurso.nombre + " que tiene una duracion de " +
            informacionCurso.duracion + " y un valor de $" + informacionCurso.valor
                fs.writeFile("datosCurso.txt", texto, (err) => {
                    if (err) throw (err);
                    console.log("\nSe ha creado el archivo correctamente");
                });
        }//Si no se crea el archivo se muestra un mensaje indicando cuales son los id disponibles
        else {
            console.log("\nLos cursos dispobibles tienen id(1, 2 o 3)")
        }
        
    }

    crearArchivo(argv);
}
