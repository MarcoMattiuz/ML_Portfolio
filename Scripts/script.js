window.onload=function(){



    src="https://kit.fontawesome.com/d53ca7f8cc.js";
    crossorigin="anonymous";
    
    const hamburgerButton = document.querySelector('.hamburger-menu');
    
    let hamburgerMenuOpen = false;
    if(hamburgerButton){
    hamburgerButton.addEventListener("click", () =>{

        if(!hamburgerMenuOpen){
            hamburgerButton.classList.add('open');
            hamburgerMenuOpen = true;
        }else{
            hamburgerButton.classList.remove('open');
            hamburgerMenuOpen = false;
        }
    });
    }




  }