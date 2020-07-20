<<<<<<< HEAD
class UI {
    constructor() {

         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

=======

class API {
    
    async obtenerDatos() {
        const total = 1000;
        const apiURL = `https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`;
        // Los datos desde la API
        const datos = await fetch(apiURL);
        // Retornar los datos como JSON
        const respuestaJSON = await datos.json();
        return {
            respuestaJSON
        }
>>>>>>> 63fd731a7084c9929573c771fff4fecf5e3638d9
    }
}