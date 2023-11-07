//Desestructuración de objetos como parámetros de funciones

/* function imprimirInfo (persona) {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}
*/

//Esta desestructuración hace más sencilla la tarea que va a realizar la función

function imprimirInfo ({nombre, edad}) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const persona = {
    nombre: "Julio",
    edad: 20,
    ciudad: "Ragnarok"
}

imprimirInfo(persona)

//En este caso, estamos pasando un objeto como argumento a la función "imprimirInfo", luego desestructuramos el objeto directamnete en los parámetros de la función para acceder a las propiedades dentro de la función