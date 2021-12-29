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
   
    let velocity;

     circle.style.top= cont *0.15+'px';
        if(window.screen.width<500){

            velocity = 0.07;
            title_about.style.right= Math.max(55 - velocity * window.scrollY, +1) + '%';
            title_Skill.style.right = Math.max(300 - velocity * window.scrollY, +1) + '%';
            title_projects.style.right = Math.max(330 - velocity * window.scrollY, +1) + '%';
            title_contact.style.right = Math.max(350 - velocity * window.scrollY, +1) + '%';
       
        }else{

             velocity = 0.04;
             title_about.style.right= Math.max(55 - velocity * window.scrollY, +1) + '%';
             title_Skill.style.right = Math.max(240 - velocity * window.scrollY, +1) + '%';
             title_projects.style.right = Math.max(260 - velocity * window.scrollY, +1) + '%';
             title_contact.style.right = Math.max(290 - velocity * window.scrollY, +1) + '%';
        
        }
    
 });



// });

