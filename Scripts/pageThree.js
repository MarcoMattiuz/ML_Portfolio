
    
    const  element = document.querySelector(".element");

    window.addEventListener('resize',a=>{
        if(screen.width<951){
            element.style.transition="all 300ms ease-in-out";
        }
    });

