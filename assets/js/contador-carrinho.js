/* ===============================
   CONTADOR DO CARRINHO (GLOBAL)
   =============================== */

function atualizarBadgeCarrinho() {
  const badge = document.getElementById("badgeCarrinho");
  if (!badge) return;

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

  if (totalItens > 0) {
    badge.textContent = totalItens;
    badge.classList.add("active");
  } else {
    badge.textContent = "";
    badge.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", atualizarBadgeCarrinho);