let { argv } = require('./config/yargs')
let {crear,getListado,actualizar,borrar} = require('./por-hacer/por-hacer')

let comando = argv._[0];


switch(comando){

    case 'crear':
        let dato = crear(argv.descripcion);
        console.log(dato);
        break;
    case 'listar':
        getListado();
        break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion,argv.completado);
        console.log(actualizado)
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('No se reconoce ese comando');

}

