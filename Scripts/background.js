//prova

window.addEventListener("load", () => {
   

    const container = document.querySelector(".container");
    var about = document.querySelector(".parallax_title");
   

    var cont = 0;
    console.log(cont);

    document.addEventListener("scroll", a => {
        cont++;
        console.log(cont);
        about.style.left = cont*8+"px";
    })

   


});


