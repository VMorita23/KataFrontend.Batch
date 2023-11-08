//Se utiliza el forEach para realizar una operación matemática con los valores de un arreglo

const valores = [10.3, 21, 30, 40, 50]
let suma = 0

valores.forEach(valor => {
    suma += valor
})

console.log(suma);