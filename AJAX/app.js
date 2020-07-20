document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos(){
    // crear un objeto xml http request
    const xhr = new XMLHttpRequest();

    // abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    // una vez cargado
    xhr.onload = function(){
        //Status 200: Correto | 403: Prohibido | 404 Not found
        if(this.status === 200){
            document.getElementById('listado').innerHTML = `<h1>${this.response}</h1>`;
        }
    }
    // enviar el request
    xhr.send();
}