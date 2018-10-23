//requireds
const fs = require('fs'); // libreria node
const colors = require('colors');
//const fs = require('express'); //No es propia de node -> package externo que han desarrolado usuarios,
//const fs = require('./'); -> archivos de nuestro proyecto

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`Tabla de ${ base }`.red);
    console.log('=================='.blue);
    for (var i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i} = ${ base * i}`);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La valor introducido ${ base } no es un número`)
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i} \n`
        }

        fs.writeFile(`tablas/Tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}