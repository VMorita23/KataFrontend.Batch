//Desestructuración anidada

const persona = {
    nombre: undefined,
    edad: 19,
    ciudad: "La mejor ciudad",
    dirección: {
        calle: "123 calle principal",
        colonia: "colonia bonita"
    }
}

const {nombre = "Luna"} = persona
console.log(nombre);