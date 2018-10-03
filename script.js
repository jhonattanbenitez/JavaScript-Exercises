rolldown = document.querySelectorAll(".rolldown-list li");

rolldown.forEach((element, i) => {
    const delay = i / 4 +"s";
    element.style.animationDelay = delay;
});
