
     /*window.addEventListener('load',a=>{

        if(screen.width<950){
           
            const element = document.querySelectorAll(".element");
            element.forEach(element =>{ 
                element.style.transition="all 300ms ease-in-out";
            })
        }
        
    });*/
           /* document.addEventListener('scroll', function(){
               
                if(screen.width<950){
                    console.log(screen.width);
                    const element = document.querySelector(".element");
      
                        element.style.left =  Math.max( -10 + 0.13  * window.scrollY,-10) + '%';
                }
        
            });*/
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
            const name1 = document.querySelector(".ct-name");
            name1.oninput = () =>{
                console.log('run');
            }
            export const lowercaseString = (string) => {
                return string.toLowerCase()
              }
              export const add = (a,b) => {return a+b}

            export default (a,b) => {
                return a-b;
            }  
       

