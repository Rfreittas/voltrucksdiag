/* ===============================
CONTADOR DO CARRINHO (GLOBAL)
=============================== */

function atualizarBadgeCarrinho() {

  const badge = document.getElementById("badgeCarrinho");
  if (!badge) return;

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const totalItens = carrinho.reduce((soma, item) => {
    return soma + (Number(item.quantidade) || 1);
  }, 0);

  if (totalItens > 0) {
    badge.textContent = totalItens;
    badge.style.display = "flex";
  } else {
    badge.textContent = "";
    badge.style.display = "none";
  }

}

/* ATUALIZAR AO CARREGAR PÁGINA */
document.addEventListener("DOMContentLoaded", atualizarBadgeCarrinho);

/* ATUALIZAR ENTRE PÁGINAS */
window.addEventListener("storage", atualizarBadgeCarrinho);
