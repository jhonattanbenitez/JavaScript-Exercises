
const paises = ['Francia', 'España', 'Portugal', 'Inglaterra', 'Irlanda'];

function mostrarPaises(){
    setTimeout(function(){
        let html ='';
        paises.forEach(pais => {
            html += `<li>${pais}</li>`
        });
        document.getElementById('app').innerHTML = html;
    }, 1000)
}

mostrarPaises();