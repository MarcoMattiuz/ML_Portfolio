const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const nav = document.querySelector(".carousel_nav");
const indicator = Array.from(nav.children);
console.log(indicator);

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
    const currentIndicator = track.querySelector(".current-indicator");
    const prevSlide = currentSlide.previousElementSibling;
    const nextSlide = currentSlide.nextElementSibling;


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
    console.log(nextSlide);
    //move to the next slide
    if (nextSlide != null) {
        moveToSlide(track, currentSlide, nextSlide);

    } else {

        moveToSlide(track, currentSlide, prevSlide);
    }
})

