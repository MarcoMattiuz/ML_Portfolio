let fullPage = new fullpage('#fullPage', {
    autoScrolling: false,
    navigation: true, //this one
    anchors: ['section1','section2','section3','section4','section5'],
    navigationTooltips: ['Home','Abouts us','Skills','Projects','Contact us'],
    showActiveTooltip: true,
    scrollingSpeed: 550,
    fitToSection: false,
	fitToSectionDelay: 500,
    scrollBar: false,
    easing: 'easeInOutCubic',
    controlArrows: false,
    slidesNavigation: true
});






let vw = window.innerWidth;
window.addEventListener("resize", () => {
    if(window.innerWidth <= 900){
        console.log(window.innerWidth);
        fullPage.destroy('all');

        fullPage = fullpage('#fullPage', {
            autoScrolling: false,
            navigation: false, //this one
            scrollingSpeed: 550,
            fitToSection: true,
            fitToSectionDelay: 500,
            scrollBar: false,
            easing: 'easeInOutCubic',
            controlArrows: false,
            slidesNavigation: true
        });


    }else{
        fullPage.destroy('all');

        fullPage = fullpage('#fullPage', {
            autoScrolling: false,
            navigation: true, //this one
            anchors: ['section1','section2','section3','section4','section5'],
            navigationTooltips: ['Home','Abouts us','Skills','Projects','Contact us'],
            showActiveTooltip: true,
            scrollingSpeed: 550,
            fitToSection: true,
            fitToSectionDelay: 500,
            scrollBar: false,
            easing: 'easeInOutCubic',
            controlArrows: false,
            slidesNavigation: true
        });
    }
})








