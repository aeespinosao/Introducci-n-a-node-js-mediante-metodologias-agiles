function promedio(nota_uno, nota_dos, nota_tres) {
    let resultado = (nota_uno + nota_dos + nota_tres) / 3;
    console.log(`Promedio 1 ${resultado}`);
}

let promedio2 = (nota_uno, nota_dos, nota_tres) => {
    setTimeout(() => {
        let resultado = (nota_uno + nota_dos + nota_tres) / 3;
        console.log(`Promedio 2 ${resultado}`);
    }, 2000);
}

let promedio3 = (nota_uno, nota_dos, nota_tres) => console.log(`Promedio 3 ${(nota_uno + nota_dos + nota_tres) / 3}`);



promedio(2, 3, 4);
promedio2(7, 3, 4);
promedio3(4, 3, 4);


let promedio_call = (nota_uno, nota_dos, nota_tres, callback) => {
    setTimeout(() => {
        let resultado = (nota_uno + nota_dos + nota_tres) / 3;
        callback(resultado);
    }, 2000);
}

promedio_call(5, 4, 5, (res) => {
    console.log(`Promedio es ${res}`);
})