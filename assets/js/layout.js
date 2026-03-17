/* header e footer todas pages*/
document.addEventListener("DOMContentLoaded", function () {

// Carregar Header
  fetch("layout/header.html")
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("header-container");
      container.innerHTML = html;

      // Atualiza badge do carrinho
      if (typeof atualizarBadgeCarrinho === "function") {
        atualizarBadgeCarrinho();
      }

      // Carrega o JS do header
      const script = document.createElement("script");
      script.src = "assets/js/header.js";
      script.onload = () => {
        if (typeof initHeaderMenu === "function") {
          initHeaderMenu(); // agora funciona com menu hambúrguer
        }
      };
      document.body.appendChild(script);
    })
    .catch(err => console.error("Erro ao carregar o header:", err));


  // Carregar Footer
  fetch("layout/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });

});