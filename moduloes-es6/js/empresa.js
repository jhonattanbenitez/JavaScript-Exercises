import { Cliente } from './cliente.js';
//exportar variables
export const nombreEmpresa = "ABC LTDA";
export let ahorro = 100000000;
export const categoria = "enseñanza";
// ejemplo de exportar fuinciones
 export function mostrarInformacion(nombre, ahorro, categoria) {
     return `Cliente: ${nombre} // Ahorro: $${ahorro} // Categoría: ${categoria}`;
     
}
// utilizar la clase del modulo cliente

export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro);
        this.categoria = categoria;

    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} // Ahorro: $${this.ahorro} // Categoría: ${this.categoria}`;
    }
}



