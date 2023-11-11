let heladeriaAbierta = false
//Formas de usar promesas
//1.Crear las reglas de la promesa

const traerHelado = new Promise(function (resolve, reject){
    //Lógica de la promesa
    if (heladeriaAbierta) {
        resolve("Te traje helado porque la heladería estaba abierta")
    }
    else{
        reject("No traje helado, estaba cerrado")
    }
})

//2.Recibir promesas como respuesta
traerHelado.then(function(response){
    //código...
    console.log(response);
}).catch(function(error){
    console.error("Heladería Bonita" + error)
})
