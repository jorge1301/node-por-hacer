let opcion1 = {
    descripcion: {
        demand:true,
        alias: 'd'
    }
}

let opcion2= {
    ...opcion1,
    completado:{
        alias: 'c',
        default: true
    }
}


let { argv } = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opcion1)
    .command('actualizar', 'Actualiza el estado', opcion2)
    .command('borrar', 'Borra un dato del json', opcion1)
    .help();



module.exports = {
    argv
}