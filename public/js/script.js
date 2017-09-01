/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles-js/particlesjs-config.json', function() {
});

// Carousel Functionality
const carousel      = document.querySelector(".carousel"),
      next          = document.querySelector(".next"),
      prev          = document.querySelector(".prev"),
      portfolioHead = document.querySelector('.portfolio-head'),
      portfolioText = document.querySelector('.portfolio-text'),
      portfolioSite = document.querySelector('.portfolio-site'),
      portfolioCode = document.querySelector('.portfolio-code');
let currdeg  = 0;
      
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

// Portfolio Descriptions Change for Each Slide
function changeSlide() {
    if (currdeg == 0 ) {
        portfolioHead.textContent = "Campground Reviews";
        portfolioText.textContent = "A social media platform for users to share and review campsites from around the world.";
        portfolioSite.setAttribute('href', "https://jacobwylie.com/camp");
        portfolioCode.setAttribute('href', "https://github.com/JacobWylie/yelpcamp");
    } else if(currdeg == -60) {
        portfolioHead.textContent = "Berlin: Black + White";
        portfolioText.textContent = "A site that returns black and white images from Flickr's API based on user's keywords.";
        portfolioSite.setAttribute('href', "https://jacobwylie.github.io/flickr-api/");
        portfolioCode.setAttribute('href', "https://github.com/JacobWylie/flickr-api");
    } 
}

next.addEventListener('click', function(e) {
    rotateRight(); 
    changeSlide();
});
prev.addEventListener('click', function(e) {
    rotateLeft(); 
    changeSlide();
});

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



















