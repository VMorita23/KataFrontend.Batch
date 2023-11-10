const esDiaLaborable = true

const accionTomada = esDiaLaborable ? "A chambear" : "Sigamos durmiendo"
console.log(accionTomada);

//Si el valor es boolean, no es necesario poner la constante entre paréntesis ni especificar que tiene que ser true o false

//Hay valores TRUTHY y FALSY, hay 6 valores falsos en javascript que son: undefined, null, NaN, 0, '' (cadena vacía) y FALSE. Los valores TRUTHY será todo lo que no sea FALSY :v por lo que si quitamos el nombre de la constante o cambiamos el valor a cualquiera de los FALSY, seguirá funcionando la expreción al igual que se ponga cualquier otra cosa que no sea FALSY.