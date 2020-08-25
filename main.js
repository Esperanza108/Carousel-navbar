document.addEventListener('DOMContentLoaded', ()  => { 
const elementosCarousel = document.querySelectorAll('.carousel');
M.Carousel.init(elementosCarousel, {
duration: 150,
dist: -80,
shift: 4,
padding: 4,
Numvisible: 3,
indicators: true,
Nowrap: false, 
});
});