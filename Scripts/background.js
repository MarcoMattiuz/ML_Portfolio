//prova

window.addEventListener("load", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const container = document.querySelector(".container");
    var about = document.querySelector(".parallax_title");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    var cont = 0;
    console.log(cont);
    
    

    container.addEventListener("scroll", a => {
        cont++;
        console.log(cont);
        about.style.left = cont+"px";
    })

});



// ctx.fillStyle= "red";
// ctx.fillRect(100, 100, 100, 100);