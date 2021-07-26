'use strict';

let slides = document.querySelectorAll('.slider_list .slider_slide');
let currentSlide = 0;
// let slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slider_slide';
    currentSlide += 1;
    if (currentSlide === 5) {
        currentSlide = 0;
        slides[currentSlide].className = 'slider_slide';
    }
    slides[currentSlide].className = 'slider_slide showing';
    console.log(currentSlide);
}