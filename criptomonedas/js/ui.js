class Interfaz {
    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }
    construirSelect(){
        cotizador.obtenerMonedasAPI()
        .then(monedas =>{
            console.log(monedas.monedas.Data);
        })
    }
  
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        //seleccionar mensaje
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        
        //mostrart contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }
   
}