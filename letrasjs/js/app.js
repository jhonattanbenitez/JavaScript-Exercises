import * as UI from './interfaz.js';
import { API } from './api.js'; 

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();
    //Obtener datos del formulario 
    const artista = document.querySelector('#artista').value,
        cancion = document.querySelector('#cancion').value;
    if (artista === '' || cancion === '') {
        //el usuario deja los campos vacíos, despliega error
        UI.divMensaje.innerHTML = "Todos los campos son obligatorios";
        UI.divMensaje.classList.add('error');
        setTimeout(() => {
            UI.divMensaje.innerHTML = "";
            UI.divMensaje.classList.remove('error');
        }, 3000)
    }
    else {
        //el formulario esta completo y hace llamado a la API 
        const api = new API(artista, cancion);
        api.consultarAPI().then(data => {
            if (data.respuesta.lyrics) {
                //la canción existe
                const letra = data.respuesta.lyrics;
                console.log(letra)
                UI.divResultado.textContent = letra;
            }
            else {
                //la canción no existe
                UI.divMensaje.innerHTML = "La letra que estás buscando no existe o está mal escrita";
                UI.divMensaje.classList.add('error');
                setTimeout(() => {
                    UI.divMensaje.innerHTML = "";
                    UI.divMensaje.classList.remove('error');
                    UI.formularioBuscar.reset();
                }, 3000)
            }
        })
    
    }
});