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
   //imprime el resultado de la cotización
   mostrarResultado(resultado, moneda, crypto){
        const datosMoneda = resultado[crypto][moneda]
        //recortar digitos de precio
        let precio = datosMoneda.PRICE.toFixed(2);

        //construir el template
        let templateHTML =`
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda 
                    ${datosMoneda.TOSYMBOL} es de: $ ${precio}
                </div>
            
            </div>
        `
        //insertar el resultado
        document.getElementById('resultado').innerHTML = templateHTML;
   }
}