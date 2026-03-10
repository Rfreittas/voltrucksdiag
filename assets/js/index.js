const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const cards = carousel.querySelectorAll(".product-card");
const cardWidth = cards[0].offsetWidth + 20;

/* DUPLICAR CARDS PARA INFINITO */

cards.forEach(card => {
  const clone = card.cloneNode(true);
  carousel.appendChild(clone);
});

/* BOTÃO NEXT */

next.addEventListener("click", () => {

  carousel.scrollBy({
    left: cardWidth,
    behavior: "smooth"
  });

});

/* BOTÃO PREV */

prev.addEventListener("click", () => {

  carousel.scrollBy({
    left: -cardWidth,
    behavior: "smooth"
  });

});

/* LOOP INFINITO */

carousel.addEventListener("scroll", () => {

  if(carousel.scrollLeft >= carousel.scrollWidth / 2){

    carousel.scrollLeft = 0;

  }

});