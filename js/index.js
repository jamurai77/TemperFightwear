const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const bar = document.querySelector('.bar');

const searchIcon = document.querySelector('.bx-search');
const searchBar = document.querySelector('.search-bar');
const menuTitle = document.querySelector('.menu-title');

const slider = document.querySelector('.hero__carousel__slider');
const slides = Array.from(slider.children);
const prevButton = document.querySelector('.hero__carousel__button--left');
const nextButton = document.querySelector('.hero__carousel__button--right');
const dotsNav = document.querySelector('.hero__carousel__indicators');
const cta = document.querySelector('.hero__carousel__cta');
const dots = Array.from(dotsNav.children);
const ctas = Array.from(cta.children);


const moveToSlide = (slider, currentSlide, targetSlide) => {
    const currentIndex = slides.indexOf(currentSlide);
    const targetIndex = slides.indexOf(targetSlide);
    const amountToMove = targetIndex * 100;
    const currentCta = ctas[currentIndex];
    const targetCta = ctas[targetIndex];
    slider.style.left = '-' + amountToMove + '%';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    currentCta.classList.remove('current-slide');
    targetCta.classList.add('current-slide');
}

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

nextButton.addEventListener('click', e => {
    const currentSlide = slider.querySelector('.current-slide');
    if (!currentSlide.nextElementSibling) return;

    const targetSlide = currentSlide.nextElementSibling;
    moveToSlide(slider, currentSlide, targetSlide);
})

prevButton.addEventListener('click', e => {
    const currentSlide = slider.querySelector('.current-slide');
    if (!currentSlide.previousElementSibling) return;

    const targetSlide = currentSlide.previousElementSibling;
    moveToSlide(slider, currentSlide, targetSlide);
})

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = slider.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    moveToSlide(slider, currentSlide, targetSlide);
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
})