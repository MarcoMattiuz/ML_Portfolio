window.onload=function(){

    const fadeIn = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.24,
        rootMargin:" 0px 0px "
    };

    const appearOnScrool = new IntersectionObserver(
        function(entries,appearOnScrol){
            entries.forEach(entry =>{
                if(!entry.isIntersecting){
                    return;
                }else{
                    entry.target.classList.add("appear");
                    appearOnScrol.unobserve(entry.target);
                }
            })
        },
        appearOptions);

    fadeIn.forEach(fadeIn => {
        appearOnScrool.observe(fadeIn);
    })    
}