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


    var lastScrollTop = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    // element.addEventListener("scroll", function () { 
    //     var st = window.pageYOffset || document.about.scrollTop; 
    //     if (st > lastScrollTop) {
    //         console.log("down");
    //         cont++;
    //         console.log(cont);
    //         about.style.left = cont + "px";
    //     } else {
    //         console.log("down");
    //         cont++;
    //         console.log(cont);
    //         about.style.left = -cont + "px";
    //     }

    // }, false);

    container.addEventListener("scroll", a => {
        cont++;
        console.log(cont);
        about.style.left = cont*8+"px";
    })

   


});



// ctx.fillStyle= "red";
// ctx.fillRect(100, 100, 100, 100);