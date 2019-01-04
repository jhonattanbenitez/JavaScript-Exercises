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
        
    }else{
        //mostrar mensaje para que imprima algo
        ui.mostrarMensaje('Escribe algo en el buscador.', 'alert alert-danger mt-4');
    }
    
})