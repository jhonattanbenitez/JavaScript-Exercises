
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
    }
}