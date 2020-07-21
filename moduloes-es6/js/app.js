import { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js';
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as informacionEmpresa, Empresa } from './empresa.js';
/* 
console.log(nombreCliente);
console.log(nombreEmpresa);
console.log(ahorroEmpresa);
console.log(categoria) */

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());
//Información del cliente
/* const info = mostrarInformacion(nombreCliente, ahorro);
//Información Empresa

const infoEmpresa = informacionEmpresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(infoEmpresa); */
//Utilizar la Clase
/* let cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion()); */