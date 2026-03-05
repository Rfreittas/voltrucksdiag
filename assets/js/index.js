const carousel = document.getElementById('carousel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let scrollAmount = 0;
const cardWidth = 340;

next.addEventListener('click', () => {
  scrollAmount += cardWidth;
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prev.addEventListener('click', () => {
  scrollAmount -= cardWidth;
  if (scrollAmount < 0) scrollAmount = 0;
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

  const track = document.querySelector('.mini-track');

  track.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });

  track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });