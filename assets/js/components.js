

/* header e footer todas pages*/
document.addEventListener("DOMContentLoaded", function () {

  // Carregar Header
  fetch("/components/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
      if (typeof atualizarBadgeCarrinho === "function") {
        atualizarBadgeCarrinho();
      }
    });

  // Carregar Footer
  fetch("/components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });

});