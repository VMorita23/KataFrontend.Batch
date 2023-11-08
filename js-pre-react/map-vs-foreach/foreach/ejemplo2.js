//Modificando el arreglo original

const numeros = [1, 2, 3, 4, 5]

//Cada 'forEach', en la función que pide como parámetro, a su vez, esa función puede recibir 3 argumentos: elemento, indice y el arreglo completo

console.log('original', numeros); //mostrará el arreglo antes de la modificación

numeros.forEach((numero, indice, arregloCompleto) => {
    //console.log(`${indice}.-${numero} ==== ${arregloCompleto}`);
    arregloCompleto[indice] = numero * 2
    //esto modifica el arreglo original
})

console.log('modificación', numeros); //mostrará el arreglo ya modificado por la función