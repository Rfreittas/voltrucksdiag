// Função para inicializar o menu hambúrguer e submenu
function initHeaderMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  if (!menuToggle || !menu) return;

  // Toggle do menu principal
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Toggle do submenu Produtos
  document.querySelectorAll(".has-submenu > a").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });
}
