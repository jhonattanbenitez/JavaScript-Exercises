rolldown = document.querySelectorAll(".rolldown-list li");

rolldown.forEach((element, i) => {
    const delay = i / 4 +"s";
    element.style.animationDelay = delay;
});

function btnReloaded(){
   const botonReloaded = document.getElementById("myList");
   botonReloaded.classList.remove("rolldown-list");
    setTimeout(function() {
     botonReloaded.classList.add("rolldown-list");
    }, 1);
}



