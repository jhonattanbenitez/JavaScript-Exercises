import { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js'
const info = mostrarInformacion(nombreCliente, ahorro);
//console.log(info);

//Utilizar la Clase
let cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion());