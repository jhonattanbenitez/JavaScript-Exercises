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