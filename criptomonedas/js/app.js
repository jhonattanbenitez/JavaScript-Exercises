const cotizador = new API('128553e8fa60c58abd0f3e38951a9e9192d843d3b4f2a4824913a7cc68492512');
const ui = new Interfaz();
//leer formulario

const formulario = document.getElementById('formulario');

//event listener

formulario.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log('enviando');
    //leer la moneda seleccionada
    const monedaSelect = document.getElementById('moneda');
    const monedaSeleccionada =  monedaSelect.options[monedaSelect.selectedIndex].value;

    //leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.getElementById('criptomoneda');
    const criptoMonedaSeleccionada =  criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    console.log(criptoMonedaSeleccionada);

    //comprobar que ambos campos no estén vacíos

    if(monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){
        ui.mostrarMensaje('Ambos campos son obligatorios.', 'alert bg-danger text-center');
    }else {
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
        .then(data =>{
            console.log(data);
        })
    }
})