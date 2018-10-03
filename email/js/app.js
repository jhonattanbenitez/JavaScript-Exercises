const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded", inicioApp);
    email.addEventListener("blur", validarCampo);
    asunto.addEventListener("blur", validarCampo);
    mensaje.addEventListener("blur", validarCampo);

}

function inicioApp(){
    btnEnviar.disabled = true;
}

function validarCampo(){
    validarLongitud(this);
    
}

function validarLongitud(campo){
    
    if(campo.value.length > 0 ){
        campo.style.borderBottomColor = "gren";
        campo.classList.remove("error");
    }else{
        campo.style.borderBottomColor = "red";
        campo.classList.add('error');
    }
    
}

