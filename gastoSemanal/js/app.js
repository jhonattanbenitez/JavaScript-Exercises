//Variables
const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;
//Classes
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }

}
//interfaz classes 
class Interfaz {
    insertarPresupuesto(cantidad){
        console.log(cantidad);
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        //insertar al html
        presupuestoSpan.innerHTML =`${cantidad}`;
        restanteSpan.innerHTML =`${cantidad}`;
    }
    imprimirMensaje(mensaje, tipo){
       const divMensaje = document.createElement('div');
       divMensaje.classList.add('text-center', 'alert');
       if(tipo === 'error'){
           divMensaje.classList.add('alert-danger');
       }else{
           divMensaje.classList.add('alert-succes');
       }
       divMensaje.appendChild(document.createTextNode(mensaje));
       //insertar en el DOM
       document.querySelector('.primario').insertBefore(divMensaje, formulario);
       //quitar el alert después de 3 s
       setTimeout(() => {
           document.querySelector('.primario .alert').remove();
           formulario.reset();
       }, 3000);
    }
    //inserta los gastos a la lista
    agregarGastoListado(nombreGasto, cantidadGasto){
        const gastosListado = document.querySelector('#gastos ul')
        //crear li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        //insertar gasto
        li.innerHTML = `
            ${nombreGasto}
            <span class="badge badge-primary badge-pill"> $${cantidadGasto} </span>
        `;
        //insertar al HTML
        gastosListado.appendChild(li);
    }
    //comprueba el presupuesto restante 
    presupuestoRestante(cantidad){
        console.log(cantidadPresupuesto);
        const restante = document.querySelector('#restante');
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
        restante.innerHTML = `${presupuestoRestanteUsuario}`
        this.comprobarPresupuesto();
    }
    //cambia de color el presupuesto restante
    comprobarPresupuesto (){
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;
        //comprobar el 25%
        if((presupuestoTotal/4) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
        }else if((presupuestoTotal/ 2) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }


    }
}


//Event Listeners
document.addEventListener('DOMContentLoaded', ()=>{
    if(presupuestoUsuario === null || presupuestoUsuario === '' || presupuestoUsuario === '0'){
        window.location.reload();
    }
    else{
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        //instanciar la clase de Interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    //leer del formulario de gastos 
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;
    //instanciar la interfaz 
    const ui = new Interfaz();

    if(nombreGasto === '' || cantidadGasto === ''){
        //2 parametros, mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    }else{
        ui.imprimirMensaje('Correcto', 'correcto');
        ui.agregarGastoListado(nombreGasto, cantidadGasto)
        ui.presupuestoRestante(cantidadGasto);
    }
})

