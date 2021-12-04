//prova

window.addEventListener("load", () => {
    var title_about = document.querySelector("#about");
    var title_skill = document.querySelector("#skill");

    var cont = 0;
    console.log(cont);

    document.addEventListener("scroll", a => {
        cont++;
        console.log(cont);
        title_about.style.left = cont+"px";
    })


    var cont1 = 0;
    console.log(cont);

    document.addEventListener("scroll", a => {
        cont1++;
        console.log(cont1);
        title_skill.style.left = cont1+"px";
    })


   
});

