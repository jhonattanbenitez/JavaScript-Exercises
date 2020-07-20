class EventBrite {
    constructor(){
        this.token_auth = 'WBHLIXGOZ7VTAF736TGV';
        this.ordenar = 'date';
    }
    // mostrar resultados de la búsqueda
    async obtenerEventos(evento, categoria){
        const respuestaEvento = await 
        fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);
        // código esperar la respuesta del evento y devolverlo como JSON
        const eventos = await respuestaEvento.json();
        return {
            eventos
        }
    }
    // obtiene las categorías en init
    async obtenerCategorias(){
        //consultar las categorías a la REST API de event brite
        const respuestaCategorias =  await 
        fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
        //Esperar la repsuesta y devolver un json
        const categorias = await respuestaCategorias.json();
        //devolvemos el resultado 
        return {
            categorias
        }
    }
}