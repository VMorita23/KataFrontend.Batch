//La desestructuración de objetos literales en JS te permite extraer propiedades de un objeto y asignarlas a variables/constantes individuales de manera más coneviente

const persona = {
    nombre: "Cinthya",
    edad: 20,
    ciudad: "La mejor ciudad"
}

//Desestructuración
let {nombre} = persona //se puede desestructurar una sóla propiedad
console.log(nombre);