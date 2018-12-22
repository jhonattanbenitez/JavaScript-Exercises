//Promises
//se crea la promesa con dos parametros, resolve y reject
const esperando = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve('se ejecutó')
    }, 5000);
});
//luego de resolver la promesa se ejecuta el mensaje
esperando.then(mensaje =>{
    console.log(mensaje);
});

