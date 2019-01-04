//instanciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

//listener al buscador

document.getElementById('buscarBtn').addEventListener('click', (e) =>{
    e.preventDefault();
    //leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;
    //leer el select 
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
    //validar que haya algo escrito en el buscador 

    if(textoBuscador !== ''){
        //cuando si hay algo 
        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
        .then(evento =>{
            if(evento.eventos.events.length > 0){
                ui.limpiarResultados();
                ui.mostrarEventos(evento.eventos)
            }else{
                //no hay eventos, enviar mensaje
                ui.mostrarMensaje('No hay eventos disponibles para la búsqueda realizada.', 'alert alert-danger mt-4')
            }
        })
        
    }else{
        //mostrar mensaje para que imprima algo
        ui.mostrarMensaje('Escribe algo en el buscador.', 'alert alert-danger mt-4');
    }
    
})