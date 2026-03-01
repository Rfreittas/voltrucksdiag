/* ===============================
   ADD AO CARRINHO - CARDS
   PADRÃO FINAL (SEM BUG)
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".btn-add-carrinho");

  if (!botoes.length) return;

  botoes.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const produto = {
        id: btn.dataset.codigo || btn.dataset.id || btn.dataset.nome,
        nome: btn.dataset.nome || "Produto",
        preco: Number(btn.dataset.preco) || 0,
        imagem: btn.dataset.imagem || "",
        quantidade: 1
      };

      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

      const existente = carrinho.find(p => p.id === produto.id);

      if (existente) {
        existente.quantidade += 1;
      } else {
        carrinho.push(produto);
      }

      localStorage.setItem("carrinho", JSON.stringify(carrinho));

      /* ATUALIZA CONTADOR */
      if (typeof atualizarBadgeCarrinho === "function") {
        atualizarBadgeCarrinho();
      }

      /* FEEDBACK VISUAL */
      const textoOriginal = btn.innerText;
      btn.innerText = "✔ ADICIONADO";
      btn.disabled = true;

      setTimeout(() => {
        btn.innerText = textoOriginal;
        btn.disabled = false;
      }, 1200);
    });
  });
});