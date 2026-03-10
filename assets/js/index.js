const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const cardWidth = 340;

next.addEventListener("click", () => {
  carousel.scrollBy({
    left: cardWidth,
    behavior: "smooth"
  });
});

prev.addEventListener("click", () => {
  carousel.scrollBy({
    left: -cardWidth,
    behavior: "smooth"
  });
});

  const track = document.querySelector('.mini-track');

  track.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });

  track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });