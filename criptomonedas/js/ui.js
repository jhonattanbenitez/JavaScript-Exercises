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
            //crear un select de opciones 
            const select = document.getElementById('criptomoneda');
            // iterar por los resultados de la API
            for(const [key, value] of Object.entries(monedas.monedas.Data)){
                //añadir el simbolo y el nombre como opciones
                const opcion = document.createElement('option');
                opcion.value = value.Symbol; 
                opcion.appendChild(document.createTextNode(value.CoinName));
                select.appendChild(opcion);

            }   
            console.log(Object.entries(monedas.monedas.Data));
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