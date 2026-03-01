// ===== CAROUSEL CARDS PAGE PRINCIPAL =====
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = Array.from(document.querySelectorAll(".product-card"));
  const dotsContainer = document.querySelector(".dots");

  let currentIndex = 0;
  let visibleCards = getVisibleCards();
  let isTransitioning = false;
  let startX = 0;
  let currentTranslate = 0;

  function getVisibleCards() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  // ===== CLONE PARA LOOP =====
  function cloneCards() {
    visibleCards = getVisibleCards();
    track.innerHTML = "";
    dotsContainer.innerHTML = "";

    cards.forEach(card => track.appendChild(card));

    cards.slice(0, visibleCards).forEach(card => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });

    createDots();
  }

  // ===== DOTS =====
  function createDots() {
    cards.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => moveToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots(index) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index % cards.length].classList.add("active");
  }

  function moveToSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex = index;
    updatePosition();

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function updatePosition() {
    const percentage = 100 / visibleCards;
    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${currentIndex * percentage}%)`;
    updateDots(currentIndex);
  }

  function nextSlide() {
    currentIndex++;
    updatePosition();

    if (currentIndex >= cards.length) {
      setTimeout(() => {
        track.style.transition = "none";
        currentIndex = 0;
        updatePosition();
      }, 500);
    }
  }

  // ===== AUTOPLAY =====
  let autoplay = setInterval(nextSlide, 3000);

  const carousel = document.querySelector(".carousel");

  carousel.addEventListener("mouseenter", () => clearInterval(autoplay));
  carousel.addEventListener("mouseleave", () => {
    autoplay = setInterval(nextSlide, 3000);
  });

  // ===== SWIPE MOBILE =====
  carousel.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    clearInterval(autoplay);
  });

  carousel.addEventListener("touchmove", e => {
    const currentX = e.touches[0].clientX;
    currentTranslate = currentX - startX;
  });

  carousel.addEventListener("touchend", () => {
    if (currentTranslate < -50) {
      nextSlide();
    } else if (currentTranslate > 50) {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      updatePosition();
    }

    currentTranslate = 0;
    autoplay = setInterval(nextSlide, 3000);
  });

  // ===== RESPONSIVO REALTIME =====
  window.addEventListener("resize", () => {
    visibleCards = getVisibleCards();
    cloneCards();
    currentIndex = 0;
    updatePosition();
  });

  // INIT
  cloneCards();
});