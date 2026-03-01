/* ===============================
   ADICIONAR AO CARRINHO (PRODUTO)
   SEM REDIRECIONAR
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnCarrinho");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const container =
      btn.closest(".produto-detalhe, .product-detail, .product-page");

    // 🔒 segurança: pega dados do HTML
    const produto = {
      id:
        btn.dataset.codigo ||
        container?.dataset.codigo ||
        btn.dataset.nome ||
        "produto-unico",

      nome:
        btn.dataset.nome ||
        container?.querySelector("h1, h2, h3")?.innerText.trim() ||
        "Produto",

      preco:
        Number(btn.dataset.preco || container?.dataset.preco) || 0,

      imagem: (() => {
        if (btn.dataset.imagem) return btn.dataset.imagem;
        if (container) {
          const img = container.querySelector("img");
          if (img) return img.getAttribute("src");
        }
        return "";
      })(),

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
    btn.classList.add("adicionado");
    btn.innerHTML = "✔ ADICIONADO";

    setTimeout(() => {
      btn.innerHTML = `<i class="bi bi-cart-check"></i> ADICIONAR AO CARRINHO`;
      btn.classList.remove("adicionado");
    }, 1500);
  });
});