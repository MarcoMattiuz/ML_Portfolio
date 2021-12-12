//prova

// window.addEventListener("load", () => {
 var title_about = document.querySelector("#title-about");
 var title_Skill = document.querySelector("#title-skill");
 var title_projects = document.querySelector("#title-projects");
 var title_contact = document.querySelector("#title-contact");

 console.log(title_about);


var cont = 0;
console.log(cont);
var vh=Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);;
console.log(vh);


window.addEventListener("scroll", a => {
    cont++;
    title_about.style.left=Math.max( -5 + 0.07  * window.scrollY,-1) + '%';
    title_Skill.style.left=Math.max(160 - 0.07  * window.scrollY,-10) + '%';
    title_projects.style.left=Math.max(-170 + 0.07  * window.scrollY,-50) + '%';
    title_contact.style.left=Math.max(+280 - 0.07  * window.scrollY,-50) + '%';

   
})



// });

