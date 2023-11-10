//Crear un arreglo de las longitudes de las palabras de otro arreglo

const palabras = ["Linterna", "Llanta", "Espada", "Vaca"]

//SALIDA ESPERADA | EXPECTED OUTPUT: [8, 6]

const longitudes = palabras.map(palabra => {
    return `[La palabra ${palabra} tiene ${palabra.length} letras`
});

console.log('palabras:', palabras);
console.log('longitudes:', longitudes);