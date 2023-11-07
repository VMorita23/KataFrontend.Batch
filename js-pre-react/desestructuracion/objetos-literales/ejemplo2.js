//Darle un sobrenombre a las propiedades que se desestructuran

const alumno = {
    nombre: "Claudia",
    edad: 17,
    escuela: "Delna Vo"
}

let {nombre: nombreFav} = alumno //Debido a que ya se usó 'nombre' previamente, se usa un sobrenombre para llamarlo

console.log(nombreFav);
