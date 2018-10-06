//Variables
const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?');
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


//Event Listeners
document.addEventListener('DOMContentLoaded', ()=>{
    if(presupuestoUsuario === null || presupuestoUsuario === '' || presupuestoUsuario === '0'){
        window.location.reload();
    }
    else{
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        console.log(cantidadPresupuesto);
    }
} )
