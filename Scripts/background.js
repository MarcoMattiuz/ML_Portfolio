//prova

// window.addEventListener("load", () => {
 var title_about = document.querySelector("#title-about");
 console.log(title_about);
// var title_skill = document.querySelector("#skill");


var cont = 0;
console.log(cont);
var vh=Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);;
console.log(vh);


window.addEventListener("scroll", a => {
    cont++;
    title_about.style.left= cont+"px";
    console.log(cont);
})



// });

