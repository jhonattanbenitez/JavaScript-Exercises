document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);

function cargarTXT(){
    fetch('datos.txt')
    .then(respuesta =>{
        return respuesta.text();
    })
    .then(datos =>{
        console.log(datos);
        document.getElementById('resultado').innerHTML = datos;
    })
    .catch(error =>{
        console.log(error);
    })
}

function cargarJSON(){
    fetch('empleados.json')
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        let html = '';
        data.forEach(empleado => {
          html += `<li>${empleado.nombre} ${empleado.puesto}</li>`;
        });
        document.getElementById('resultado').innerHTML = html;
    })
    .catch(error =>{
        console.log(error);
        
    })

}

function cargarREST(){
    fetch('https://picsum.photos/list')
    .then(res =>{
        return res.json();
    })
    .then(imagenes =>{
        console.log(imagenes);
        let html = '';
        imagenes.forEach(imagen => {
            html += `
                <li>
                    <a href="${imagen.post_url}">ver imagen</a>
                    ${imagen.author}
                </li>
            `
        });
        document.getElementById('resultado').innerHTML = html;
    })
}