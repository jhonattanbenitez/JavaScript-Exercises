class Seguro {
    constructor(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
    }
    cotizarSeguro(){
        /* 
            1. Americano = 1.15
            2. Asiatico  = 1.05
            3. euopeo    = 1.35
        */
       let cantidad;
       const base = 2000;
       switch(this.marca){
           case '1': 
                    cantidad = base * 1.15;
                    break;
           case '2': 
                    cantidad = base * 1.05;
                    break;
           case '3': 
                    cantidad = base * 1.35;
                    break;
       }
       const diferencia = new Date().getFullYear() - this.anio;
       //cada año hay que reducir el 3% del valor del seguro
       cantidad -=((diferencia *3)* cantidad) / 100;
       /*
        si el seguro es básico se múltiplica por 30% mas
        si el seguro es completo es 50% más
       */
      if(this.tipo === 'basico'){
          cantidad *= 1.30;
      }else {
          cantidad *= 1.50;
      }
      return cantidad;
    }

    
} 


class Interfaz { 

        mostrarMensaje(mensaje, tipo){
        const div = document.createElement('div');
        if(tipo === 'error'){
            div.classList.add('mensaje', 'error');
        }else{
            div.classList.add('mensaje', 'correcto');
        }
        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div, document.querySelector('.form-group'));
        setTimeout(() =>{
            document.querySelector('.mensaje').remove();
        }, 3000);
    }
        //imprime el resultado de la cotización

        mostrarResultado(seguro, total){
        const resultado = document.getElementById('resultado');
        let marca;
        switch(seguro.marca){
            case '1': 
                    marca= 'Americano';
                    break;
            case '2':
                    marca= 'Asiatico';
                    break;
            case '3':
                    marca= 'Europeo';
                    break;
    
        }
        const div = document.createElement('div');
        div.innerHTML = `
            <p class='header'>Tu resumen: </p>
            <p>Marca: ${marca} </p>
            <p>Año:   ${seguro.anio} </p>
            <p>Tipo:  ${seguro.tipo} </p>
            <p>total: $ ${total}     </p>
         
        `;
        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';
        setTimeout(() =>{
            resultado.appendChild(div);
            spinner.style.display = 'none';
        }, 3000)
    
        console.log(spinner);
        
    }
    
}



const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex]
    .value;

    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
    
    const tipo = document.querySelector('input[name="tipo"]:checked')
    .value;

    const interfaz = new Interfaz();

    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
        interfaz.mostrarMensaje('Faltan datos, revirsar el formulario', 'error');
    }else {
        //limpiar resultados anteriores

        const resultados = document.querySelector('#resultado div');
        if(resultados != null){
            resultados.remove();
        }

        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo)
        
        const cantidad = seguro.cotizarSeguro();

        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...', 'correcto');

    }
   
});

const max = new Date().getFullYear(),
      min = max -20;
      
const selectAnios = document.getElementById("anio");
for (let i = max; i > min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}

