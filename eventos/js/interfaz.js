class Interfaz {
    constructor(){
        //inicializa la app al instanciar
        this.init();
        //leer resultado
        this.listado = document.getElementById('resultado-eventos');

    }
    //metodo cuando se inicialice la app
    init(){
        this.imprimirCategorias();
    }
    //imprimir categorías
    imprimirCategorias(){
        const listaCategorias = eventbrite.obtenerCategorias()
        .then(categorias => {
            const cats =categorias.categorias.categories;
            //seleccionar el select de categorías 
            const selectCategoria = document.getElementById('listado-categorias');
            //recorremos el arreglo e imprimimos las categoráis seleccionadas
            cats.forEach(cat  => {
                const option = document.createElement('option');
                option.value = cat.id;
                option.appendChild(document.createTextNode(cat.name_localized));
                selectCategoria.appendChild(option);
            });

        })
    }
    //lee la respuesta de la API e imprime los resultados
    mostrarEventos(eventos){
        //lee los eventos y agregarlos a una variable
        const listaEventos = eventos.events;
        console.log(listaEventos);
        //recorrer los eventos y crear el template
        listaEventos.forEach(evento => {
            this.listado.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}">
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Informacón del evento</p>
                                <p>${evento.description.text.substring(0, 280)}...</p>
                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Fecha y Hora: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar boletos</a>
                            </div>
                        </div>
                    </div>    
                </div>
            `;
        });
    }
    // limpia los resultados previos
    limpiarResultados(){
        this.listado.innerHTML = '';
    }
    //metodo para imprimer mensajes: 2 prámetros, mensaje y clases
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases;
        div.appendChild(document.createTextNode(mensaje));
        //buscar padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div)
        //quitar el alert después de 3 seg
        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);

    }
    //desaparece el mensaje en caso de que exista
    limpiarMensaje(){
        const alert = document.querySelector('.alert')
        if(alert){
           alert.remove(); 
        }
    }
}