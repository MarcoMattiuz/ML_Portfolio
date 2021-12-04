const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const nav = document.querySelector(".carousel_nav");
const indicator = Array.from(nav.children);


const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}


prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const nextSlide = currentSlide.nextElementSibling;
    const currDot = nav.querySelector(".current-indicator");
    const nextDot = nav.querySelector(".carousel_indicator");
    updateDots(currDot,nextDot);
    console.log(prevSlide);
    //move to the next slide
    if (prevSlide != null) {
        moveToSlide(track, currentSlide, prevSlide);
    } else {

        moveToSlide(track, currentSlide, nextSlide);

    }
})

nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const prevSlide = currentSlide.previousElementSibling;
    const currDot = nav.querySelector(".current-indicator");
    const nextDot = nav.querySelector(".carousel_indicator");
    if(currDot!=null&&nextDot!=null){
    updateDots(currDot,nextDot);
    }
    console.log(nextSlide);
    //move to the next slide
    if (nextSlide != null) {
        moveToSlide(track, currentSlide, nextSlide);

    } else {

        moveToSlide(track, currentSlide, prevSlide);
    }
})
const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove('current-indicator');
    targetDot.classList.add('current-indicator');
}
nav.addEventListener('click', e => {

    const targetDot= e.target.closest('button');
    if(!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currDot = nav.querySelector(".current-indicator");
    const targetIndex = indicator.findIndex( indicator => indicator== targetDot );
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currDot,targetDot);
})

