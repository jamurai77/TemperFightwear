const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const bar = document.querySelector('.bar');

// const searchIcon = document.querySelector('.fa-solid fa-magnifying-glass');
// const searchBar = document.querySelector('.search-bar');
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

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const showHideArrow = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--visible');
    bar.classList.toggle('menu-open');
})

menuTitle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--visible');
})

setInterval(function () {
    const currentSlide = slider.querySelector('.current-slide');
    const currentIndex = slides.indexOf(currentSlide);
    var targetSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    var targetDot = currentDot.nextElementSibling;
    var targetIndex = dots.findIndex(dot => dot === targetDot);

    if (currentIndex === slides.length - 1) {
        targetSlide = slides[0];
        targetDot = dots[0];
        targetIndex = 0;
    };

    moveToSlide(slider, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    showHideArrow(slides, prevButton, nextButton, targetIndex);
}, 3500);

nextButton.addEventListener('click', e => {
    const currentSlide = slider.querySelector('.current-slide');
    const targetSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = currentDot.nextElementSibling;
    const targetIndex = dots.findIndex(dot => dot === targetDot);

    moveToSlide(slider, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    showHideArrow(slides, prevButton, nextButton, targetIndex);
})

prevButton.addEventListener('click', e => {
    const currentSlide = slider.querySelector('.current-slide');
    const targetSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = currentDot.previousElementSibling;
    const targetIndex = dots.findIndex(dot => dot === targetDot);

    moveToSlide(slider, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    showHideArrow(slides, prevButton, nextButton, targetIndex);
})

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = slider.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(slider, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    showHideArrow(slides, prevButton, nextButton, targetIndex);
})