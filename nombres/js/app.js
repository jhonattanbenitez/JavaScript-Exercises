const formulario = document.querySelector('#generar-nombre');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    //leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    
    const cantidad = document.getElementById('numero').value;
    let url = '';

    url +='http://uinames.com/api/?';
    //si hay origen agregarlo al url
    if(origenSeleccionado !== ''){
        url += `region=${origenSeleccionado}&`
    }
    //si hay género agregarlo al url
    if(generoSeleccionado !== ''){
        url += `gender=${generoSeleccionado}&`
    }
    //si hay cantidad agregarlo al url
    if(cantidad !== ''){
        url += `amount=${cantidad}&`
    }
    //conectar con ajax

    const xhr = new XMLHttpRequest();
    //abrimos la conección
    xhr.open('GET', url, true);

    //datos e impresión del template
    xhr.onload = function(){
        if(this.status === 200){
            const nombres = JSON.parse(this.responseText);
            let htmlNombres = `<h2>Nombres generados</h2>`
            
            htmlNombres += `<ul class="lista">`;
            //imprimir cada nombre
            nombres.forEach(nombre => {
                htmlNombres +=`
                        <li>${nombre.name}</li>
                `;

            }); 
            htmlNombres +=`</ul>`
            document.getElementById('resultado').innerHTML= htmlNombres;
        }
    }
    //enviar el request
    xhr.send();




} )