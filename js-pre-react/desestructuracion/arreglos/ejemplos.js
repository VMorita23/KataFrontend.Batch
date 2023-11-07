//La desestructuración de arreglos en JS es una característica que te permite extraer valores de un arreglo y asignarlos a variables/constantes individuales de una manera más conveniente.

//Ejemplo 1: Asignación de valores a variables individuales
const arreglo = [1, 2, 3]

//Desestructuración
let [primerValor, segundoValor, tercerValor] = arreglo

console.log(segundoValor);

//Ejemplo 2: Omisión de valores no deseados
const arreglo1 = [1, 2, 3, 4, 5]

//Desestructuración con omisión de valores
const [firstValue, secondValue, thirdValue, , , fivethValue] = arreglo1

console.log(fivethValue);
//para acceder a un valor no especificado en la desestructuración se puede hacer de la siguiente manera

console.log(arreglo1[2]); //se accede al número 3, valor no especificado en la desestructuración

