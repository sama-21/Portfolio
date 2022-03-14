// Button Subscribe
const subscribe = document.querySelector('#btn-subscribe');

subscribe.addEventListener('click', ()=> {
    subscribe.innerHTML = "Thank You!!";
})

// Scroll Effects

window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'left',
  distance: '100%' 
});

sr.reveal('#home-left', {
    duration: 3000,
    origin: 'left',
    distance: '25%'
})

sr.reveal('#home-right', {
    duration: 3000,
    origin: 'right',
    distance: '40%'
})

sr.reveal('#about-left', {
    duration: 3000,
    origin: 'left',
    distance: '50%',
    vue: 0.2
})

sr.reveal('#about-right', {
    duration: 3000,
    origin: 'right',
    distance: '80%',
    vue: 0.2
})

sr.reveal('#projects-left', {
    duration: 3000,
    origin: 'bottom',
    distance: '70%',
    vue: 0.2
})

sr.reveal('#projects-right', {
    duration: 3000,
    origin: 'top',
    distance: '70%',
    vue: 0.2
})