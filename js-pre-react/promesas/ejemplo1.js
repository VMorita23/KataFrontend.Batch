//En JS, las promesas son objetos que representan un valor que puede estar disponible en un tiempo indefinifo. Por naturaleza, son estructuras asincronas

//1.Crear la estructura
const promesa = new Promise(function(resolve, reject) {
    //Las promesas contienen 2 métodos
    resolve() //se utiliza para devolver un valor cuando la promesa se cumple
    reject() //se utiliza para devolver un valor cuando la promesa se rechaza
})

//2.Consumir la promesa
promesa.then(function(response){
    console.log(response)
}).catch(function(error){
    console.error(error)
});