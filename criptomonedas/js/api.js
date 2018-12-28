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
    async obtenerValores(moneda, criptomoneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apiKey}`;
        //consultar en REST API
        const urlConvertir = await fetch(url);
        const resultado = await urlConvertir.json();
        return {
            resultado
        }
    }
}