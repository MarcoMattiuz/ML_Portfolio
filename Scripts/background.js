//prova

window.addEventListener("load", () => {
   

    const container = document.querySelector(".container");
    var about = document.querySelector(".parallax_title");
    var circles = document.querySelector('.decorative_circle');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    var cont = 0;
    console.log(cont);

    container.addEventListener("scroll", a => {
        cont++;
        console.log(cont);
        about.style.left = cont*8+"px";
    })

   


});


