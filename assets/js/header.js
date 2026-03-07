const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const header = document.getElementById("header");

let lastScroll = 0;

/* MENU MOBILE */

toggle.addEventListener("click",()=>{

toggle.classList.toggle("active");
menu.classList.toggle("active");

});


/* HEADER INTELIGENTE */

window.addEventListener("scroll",()=>{

let currentScroll = window.pageYOffset;

if(currentScroll > lastScroll && currentScroll > 100){

header.classList.add("hide");

}else{

header.classList.remove("hide");

}

lastScroll = currentScroll;

});