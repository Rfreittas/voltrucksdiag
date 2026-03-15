fetch("layouts/header.html")
.then(response => response.text())
.then(data => {

document.getElementById("header-container").innerHTML = data;

/* carregar script do header */

const script = document.createElement("script");
script.src = "assets/js/header/header.js";

document.body.appendChild(script);

});