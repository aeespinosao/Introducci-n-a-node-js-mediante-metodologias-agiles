const opciones = {
    curso: {
        demand: true,
        alias: 'c',
        describe: 'Identificador del curso'
    },
    documento: {
        demand: true,
        alias: 'd',
        describe: 'Documento del aspirante'
    },
    nombre: {
        demand: true,
        alias: 'n',
        describe: 'Nombre del aspirante'
    }
}

module.exports = { opciones };