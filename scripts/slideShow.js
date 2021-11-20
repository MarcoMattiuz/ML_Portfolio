const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");


const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides
// slides[0].slides.left = slideWidth*0 +'px';
// slides[1].slides.left = slideWidth*1 +'px';
// slides[1].slides.left = slideWidth * 2 +'px';

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
    console.log(prevSlide);
    //move to the next slide
    if(prevSlide!=null){
        moveToSlide(track, currentSlide, prevSlide);
    }else{
        console.log("forward");
        moveToSlide(track, currentSlide, nextSlide);
    }
})

nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const prevSlide = currentSlide.previousElementSibling;
    console.log(nextSlide);
    //move to the next slide
    if(nextSlide!=null){
        moveToSlide(track, currentSlide, nextSlide);
    }else{
        console.log("back");
        moveToSlide(track, currentSlide, prevSlide);
    }
})

