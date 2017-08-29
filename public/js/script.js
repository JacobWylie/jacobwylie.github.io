/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles-js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

// Carousel
const carousel = document.querySelector(".carousel"),
      next = document.querySelector(".next"),
      prev = document.querySelector(".prev")
let currdeg  = 0;
      

next.addEventListener('click', rotateRight);
prev.addEventListener('click', rotateLeft);

function rotateRight() {
    currdeg = currdeg - 60;
    carousel.setAttribute('style', `-webkit-transform: rotateY(${currdeg}deg); 
                               -moz-transform: rotateY(${currdeg}deg);
                               -o-transform: rotateY(${currdeg}deg);
                               transform": rotateY(${currdeg}deg)`);
}

function rotateLeft() {
    currdeg = currdeg + 60;
    carousel.setAttribute('style', `-webkit-transform: rotateY(${currdeg}deg); 
                               -moz-transform: rotateY(${currdeg}deg);
                               -o-transform: rotateY(${currdeg}deg);
                               transform": rotateY(${currdeg}deg)`);
}

// Show/Hide Divs on page
const onlineBtn = document.querySelector('.online-btn');
const portfolioBtn = document.querySelector('.portfolio-btn');
const contactBtn = document.querySelector('.contact-btn');
const onlineDiv = document.querySelector('.online');
const portfolioDiv = document.querySelector('.container-carousel');
const arrows = document.querySelector('.arrows')
const contactDiv = document.querySelector('.contact');
const hintDiv = document.querySelector('.hint');

function showOnline() {
    if (onlineDiv.classList.contains('is-hidden')) {
        onlineDiv.classList.remove('is-hidden');
    }
    if (!portfolioDiv.classList.contains('is-hidden')) {
        portfolioDiv.classList.add('is-hidden');
        arrows.classList.add('is-hidden')
    }
    if (!contactDiv.classList.contains('is-hidden')) {
        contactDiv.classList.add('is-hidden')
    }
    if (hintDiv.classList.contains('is-hidden')) {
        hintDiv.classList.remove('is-hidden')
    }
}

function showPortfolio() {
    if (portfolioDiv.classList.contains('is-hidden')) {
        portfolioDiv.classList.remove('is-hidden');
        arrows.classList.remove('is-hidden')
    }
    if (!onlineDiv.classList.contains('is-hidden')) {
        onlineDiv.classList.add('is-hidden')
    }
    if (!contactDiv.classList.contains('is-hidden')) {
        contactDiv.classList.add('is-hidden')
    }
    if (!hintDiv.classList.contains('is-hidden')) {
        hintDiv.classList.add('is-hidden')
    }
}

function showContact() {
    if (contactDiv.classList.contains('is-hidden')) {
        contactDiv.classList.remove('is-hidden');
    }
    if (!onlineDiv.classList.contains('is-hidden')) {
        onlineDiv.classList.add('is-hidden')
    }
    if (!portfolioDiv.classList.contains('is-hidden')) {
        portfolioDiv.classList.add('is-hidden');
        arrows.classList.add('is-hidden')
    }
    if (!hintDiv.classList.contains('is-hidden')) {
        hintDiv.classList.add('is-hidden')
    }
}

onlineBtn.addEventListener('click', showOnline);
portfolioBtn.addEventListener('click', showPortfolio);
contactBtn.addEventListener('click', showContact);



















