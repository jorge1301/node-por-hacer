let fs = require('fs');
let colors = require('colors')

let listadoPorHacer =[];


let guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err) =>{
        if(err) throw new Error('No se guardo la información')
    })
}

let cargarDB = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    }catch(err){
        listadoPorHacer = [];
    }
    
}

let crear = (descripcion) =>{
    cargarDB();
    let porHacer ={
        descripcion,
        completado: false 
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

let getListado = () =>{
    cargarDB();
    let dato = listadoPorHacer;
    for(let lista of dato) {
        console.log('-------Tareas por Hacer-------'.green);
        console.log(`Descripcion: ${lista.descripcion}`.yellow);
        console.log(`Estado: ${lista.completado}`.yellow);
        console.log('------------------------------ \n'.green);
        //console.table(lista)
    }
}

let actualizar=(descripcion,completado=true)=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea =>tarea.descripcion === descripcion);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    }else {
        return false
    }
};

let borrar = (descripcion) => {
    //1er manera de borrar con pop
    /*
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(index);
    if (index >= 0) {
        listadoPorHacer.pop(index);
        guardarDB();
        return 'borrado'
    } else {
        return 'No se encontro esa descripcion'
    }
    */
   //2da manera de borrar con filter
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if(nuevoListado.length === listadoPorHacer.length){
        return false
    }else {
        listadoPorHacer=nuevoListado;
        guardarDB();
        return true
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}