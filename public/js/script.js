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
let currdeg = 0,
    slide = 0;

function rotateRight() {
    currdeg = currdeg - 60;
    slide = slide + 1;
    carousel.setAttribute('style', `-webkit-transform: rotateY(${currdeg}deg); 
                                    -moz-transform: rotateY(${currdeg}deg);
                                    -o-transform: rotateY(${currdeg}deg);
                                     transform": rotateY(${currdeg}deg);`);
}

function rotateLeft() {
    slide = slide - 1;
    currdeg = currdeg + 60;
    carousel.setAttribute('style', `-webkit-transform: rotateY(${currdeg}deg); 
                                    -moz-transform: rotateY(${currdeg}deg);
                                    -o-transform: rotateY(${currdeg}deg);
                                     transform": rotateY(${currdeg}deg);`);
}

// Portfolio Descriptions Change for Each Slide
function changeSlide() {
    if (portfolioSite.classList.contains('is-hidden')) {
        portfolioSite.classList.remove('is-hidden');
    }
    if (slide == 0 || slide == 6 || slide == -6) {
        portfolioHead.textContent = "Campground Reviews";
        portfolioText.textContent = "A social media platform for users to share and review campsites from around the world.";
        portfolioSite.setAttribute('href', "https://jacobwylie.com/camp");
        portfolioCode.setAttribute('href', "https://github.com/JacobWylie/yelpcamp");
        slide = 0;
    } else if(slide == 1 || slide == -5) {
        portfolioHead.textContent = "Trending on Github";
        portfolioText.textContent = "Users can view and archive the newest trending repositories on GitHub.";
        portfolioSite.setAttribute('href', "https://jacobwylie.github.io/verkstedt-challenge/");
        portfolioCode.setAttribute('href', "https://github.com/JacobWylie/verkstedt-challenge");
    } else if(slide == 2 || slide == -4) {
        portfolioHead.textContent = "React SignUp Form";
        portfolioText.textContent = "A user signup form built with React and Node backend.";
        portfolioSite.setAttribute('href', "https://jacobwylie.github.io/SPO-form/");
        portfolioCode.setAttribute('href', "https://github.com/JacobWylie/SPO-form");
    } else if(slide == 3 || slide == -3) {
        portfolioHead.textContent = "Berlin: Black + White";
        portfolioText.textContent = "A site that returns black and white images from Flickr's API based on user's keywords.";
        portfolioSite.setAttribute('href', "https://jacobwylie.github.io/flickr-api/");
        portfolioCode.setAttribute('href', "https://github.com/JacobWylie/flickr-api");
    } else if(slide == 4 || slide == -2) {
        portfolioHead.textContent = "React Weather App";
        portfolioText.textContent = "Users can compare 5-day weather forecasts for all of their favorite cities.";
        portfolioSite.setAttribute('href', "https://jacobwylie.github.io/react-weather-app/");
        portfolioCode.setAttribute('href', "https://github.com/JacobWylie/react-weather-app/");
    } else if(slide == 5 || slide == -1) {
        portfolioHead.textContent = "The Sunbug Boogie";
        portfolioText.textContent = "A whimsical site to preview and promote the release of a children's book. ";
        portfolioSite.setAttribute('href', "https://thesunbugboogie.github.io/");
        portfolioCode.setAttribute('href', "https://github.com/JacobWylie/sunbugboogie");
    } 
}

next.addEventListener('click', e => {
    e.preventDefault();
    rotateRight(); 
    changeSlide();
});
prev.addEventListener('click', e => {
    e.preventDefault();
    rotateLeft(); 
    changeSlide();
});

// Show/Hide Divs on page
const onlineBtn    = document.querySelector('.online-btn'),
      portfolioBtn = document.querySelector('.portfolio-btn'),
      contactBtn   = document.querySelector('.contact-btn'),
      onlineDiv    = document.querySelector('.online'),
      portfolioDiv = document.querySelector('.container-carousel'),
      arrows       = document.querySelector('.arrows'),
      contactDiv   = document.querySelector('.contact'),
      hintDiv      = document.querySelector('.hint');

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

onlineBtn.addEventListener('click', e => {
    e.preventDefault();
    showOnline();
});
portfolioBtn.addEventListener('click', e => {
    e.preventDefault();
    showPortfolio();
});
contactBtn.addEventListener('click', e => {
    e.preventDefault();
    showContact();
});


















