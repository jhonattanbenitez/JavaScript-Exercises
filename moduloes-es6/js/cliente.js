//exportar variables
export const nombreCliente = "Jhonattan";
export let ahorro = 1000;
// ejemplo de exportar fuinciones
 export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} // Ahorro: $${ahorro}`;
}
//ejemplo de exportar una clase

export class Cliente{
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} // Ahorro: $${this.ahorro}`;
    }

}
