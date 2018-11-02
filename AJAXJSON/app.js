const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

boton1.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);
    xhr.onload = function(){
        if(this.status === 200){
           const persona = JSON.parse(this.response);

           const htmlTemplate = `
            <ul>
                <li>id: ${persona.id}</li>
                <li>empresa: ${persona.empresa}</li>
                <li>nombre: ${persona.nombre}</li>
                <li>actividad: ${persona.trabajo}</li>

            </ul>
           
           `;
           document.getElementById('empleado').innerHTML =htmlTemplate;
        }
    }
    xhr.send();
});

boton2.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);
    xhr.onload = function(){
        if(this.status === 200){
            const personal = JSON.parse(this.responseText);
            let htmlTemplate = '';
            personal.forEach( persona =>{
            htmlTemplate += `
            <ul>
                <li>id: ${persona.id}</li>
                <li>empresa: ${persona.empresa}</li>
                <li>nombre: ${persona.nombre}</li>
                <li>actividad: ${persona.trabajo}</li>

            </ul>
           
           `;
           
           })
           document.getElementById('empleados').innerHTML =htmlTemplate;
        }
    }
    xhr.send();
});


