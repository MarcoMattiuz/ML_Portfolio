
var title_about = document.querySelector("#title-about");
var title_Skill = document.querySelector("#title-skill");
var title_projects = document.querySelector("#title-projects");
var title_contact = document.querySelector("#title-contact");
var triangle = document.querySelector(".triangle-container");
var circle = document.querySelector(".circle-container");
const count= document.querySelector('#visitator-count');
 let cont=1;   

 window.addEventListener("scroll", a => {
    let fadeIn = document.querySelectorAll(".fade-in");
    fadeIn.forEach(fadeIn =>{
        let contentPos = fadeIn.getBoundingClientRect().top;
    let screenPos = window.innerHeight /1.13;
    if(contentPos< screenPos){

            fadeIn.classList.add("appear");

    }else {
            fadeIn.classList.remove("appear");
    }
    })
     cont = window.scrollY;
        count.style.top= cont *-0.1 +'px';
        triangle.style.top = cont * -0.23 +'px';
   
    let velocity;

     circle.style.top= cont *0.15+'px';
        if(window.screen.width<500){

            velocity = 0.07;
            title_about.style.right= Math.max(55 - velocity * window.scrollY, +1) + '%';
            title_Skill.style.right = Math.max(270 - velocity * window.scrollY, +1) + '%';
            title_projects.style.right = Math.max(310 - velocity * window.scrollY, +1) + '%';
            title_contact.style.right = Math.max(350 - velocity * window.scrollY, +1) + '%';
       
        }else{

             velocity = 0.04;
             title_about.style.right= Math.max(55 - velocity * window.scrollY, +1) + '%';
             title_Skill.style.right = Math.max(240 - velocity * window.scrollY, +1) + '%';
             title_projects.style.right = Math.max(260 - velocity * window.scrollY, +1) + '%';
             title_contact.style.right = Math.max(290 - velocity * window.scrollY, +1) + '%';
        
        }
    
 });


