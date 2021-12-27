
            window.addEventListener('scroll',()=>{
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
                
            });

         
       

