//Definir valores por objeto

const trabajador = {
    name: undefined,
    edad: 30,
    puesto: "Reclutador"
}

let {edad = 36, name = Juanito} = trabajador

console.log(name);