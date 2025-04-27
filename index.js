const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const bar = document.querySelector('.bar');

const searchIcon = document.querySelector('.bx-search');
const searchBar = document.querySelector('.search-bar');
const menuTitle = document.querySelector('.menu-title');

const slider = document.querySelector('.hero__carousel__slides');
const slides = Array.from(slider.children);
const prevButton = document.querySelector('.hero__carousel__button--left');
const nextButton = document.querySelector('.hero__carousel__button--right');
const dotsNav = document.querySelector('.hero__carousel__indicators');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

const moveToSlide = (slider, currentSlide, targetSlide) => {
    slider.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
// console.log(slideWidth);

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--visible');
    bar.classList.toggle('menu-open');
})

menuTitle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--visible');
})

searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('search-open');
})

slides.forEach(setSlidePosition);

prevButton.addEventListener('click', e => {
    const currentSlide = slider.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(slider, currentSlide, prevSlide);
})

nextButton.addEventListener('click', e => {
    const currentSlide = slider.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(slider, currentSlide, nextSlide);
})

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    const currentSlide = slider.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    if (!targetDot) {

    }
})