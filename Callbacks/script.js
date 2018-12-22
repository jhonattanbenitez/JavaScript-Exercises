
const paises = ['Francia', 'España', 'Portugal', 'Inglaterra', 'Irlanda'];

//se agregra un nuevo país después de 2 segundos
const nuevoPais = (pais, callback) =>{
    setTimeout(() =>{
        paises.push(pais);
        callback();
    }, 2000)
}

//los paises  se despliegan después de un segundo 
function mostrarPaises(){
    setTimeout(function(){
        let html ='';
        paises.forEach(pais => {
            html += `<li>${pais}</li>`
        });
        document.getElementById('app').innerHTML = html;
    }, 1000)
}
//agregar nuevo país
nuevoPais('Alemania', mostrarPaises);

mostrarPaises();