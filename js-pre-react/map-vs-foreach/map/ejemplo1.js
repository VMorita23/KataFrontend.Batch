//Se utiliza para crear un nuevo arreglo a partir de otrom aplicando una función a cada elemento del arreglo

const numeros = [1, 2, 3, 4, 5]

const numerosDuplicados = numeros.map(numero => {
    //códigos...
    return numero * 2
})

console.log("Arreglo original", numeros);
console.log("Copia del arreglo original", numerosDuplicados);