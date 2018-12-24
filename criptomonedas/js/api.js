class API {
    constructor(apikey){
        this.apikey = apikey;
    }
    //obtener todas las monedas
    async obtenerMonedasAPI(){
        const url =`https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`
        //fetch a la API
        const urlObtenerMonedas = await fetch(url);
        //respuesta en json
        const monedas = await urlObtenerMonedas.json();
        return {
            monedas
        }
    }
}