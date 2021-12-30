//prova

// window.addEventListener("load", () => {
var title_about = document.querySelector("#title-about");
var title_Skill = document.querySelector("#title-skill");
var title_projects = document.querySelector("#title-projects");
var title_contact = document.querySelector("#title-contact");
var triangle = document.querySelector(".triangle-container");
var circle = document.querySelector(".circle-container");
console.log(title_about);



// console.log(cont);
// var vh=Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);;
// console.log(vh);
 let cont=1;   

 window.addEventListener("scroll", a => {
     cont = window.scrollY;
     
        triangle.style.top = cont * 0.25 +'px';
   
    
     circle.style.top= cont *0.15+'px';
//     title_about.style.left = Math.max(-5 + 0.07 * window.scrollY, -1) + '%';
//     title_Skill.style.left = Math.max(260 - 0.07 * window.scrollY, -10) + '%';
//     title_projects.style.left = Math.max(-270 + 0.07 * window.scrollY, -50) + '%';
//     title_contact.style.left = Math.max(+350 - 0.07 * window.scrollY, -50) + '%';
//     console.log(window.scrollY);
 })



// });

