window.onload = function(){



    src="https://kit.fontawesome.com/d53ca7f8cc.js";
    crossorigin="anonymous";
}
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu-container');
   
    let hamburgerMenuOpen = false;
    if(hamburgerButton){
    hamburgerButton.addEventListener("click", () =>{
        if(!hamburgerMenuOpen){
            
            hamburgerMenu.classList.add('open');
            hamburgerButton.classList.add('open');
            document.querySelector('.contact-button').style.display='none';
            hamburgerMenuOpen = true;
        }else{
            hamburgerMenu.classList.remove('open');
            hamburgerButton.classList.remove('open');
            document.querySelector('.contact-button').style.display='flex';

            hamburgerMenuOpen = false;
        }
    });
    }




  