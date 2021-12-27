//import * as page from "/root/Scripts/pageThree.js";
import subtract from "/root/Scripts/pageThree.js";
window.onload = function(){



    src="https://kit.fontawesome.com/d53ca7f8cc.js";
    crossorigin="anonymous";
}
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const hamburgerMenu = document.querySelector('.hamburger-menu-container');
    const buttonLink = document.querySelectorAll('.contact1');   
    let hamburgerMenuOpen = false;
    for (let index = 0; index < buttonLink.length; index++) {
      buttonLink[index].onclick = () =>{
              hamburgerMenu.classList.remove('open');
              hamburgerButton.classList.remove('open');
              document.querySelector('.contact-button').style.display='flex';
  
              hamburgerMenuOpen = false;
    }
    }
    
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




    const spaceHolder = document.querySelector('.space-holder');
    const horizontal = document.querySelector('.horizontal');
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    
    function calcDynamicHeight(ref) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const objectWidth = ref.scrollWidth;
      return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
    }
    
    window.addEventListener('scroll', () => {
      const sticky = document.querySelector('.sticky');
      horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
    });
    
    window.addEventListener('resize', () => {
      spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    });

    // console.log(page.lowercaseString("geasASASAS"));
    // console.log(page.add(45,2));
    console.log(subtract(6,3));
  