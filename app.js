/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles-js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

// Hide/show portfolio projects
function portfolio() {
    const y = document.querySelector('.links');
    var x = document.querySelector('.portfolio');
    if (y.classList.contains('is-hidden')) {
        y.classList.remove('is-hidden', 'fadeOutDownBig');
        y.classList.add('fadeInDownBig');
        x.classList.add('is-hidden');
    } else {
        x.classList.remove('is-hidden');
        y.classList.add('is-hidden', 'fadeOutDownBig');
        y.classList.remove('fadeInDownBig')
    }
}