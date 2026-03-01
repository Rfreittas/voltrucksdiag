/* ======================================
   ZOOM + TROCA DE IMAGEM DO PRODUTO
   ====================================== */

document.addEventListener("DOMContentLoaded", () => {
  const areaZoom = document.getElementById("areaZoom");
  const imagemPrincipal = document.getElementById("imagemPrincipal");
  const miniaturas = document.querySelectorAll("#listaImagens img");

  // segurança: evita erro se não existir
  if (!areaZoom || !imagemPrincipal || !miniaturas.length) return;

  /* ===== ZOOM AO PASSAR O MOUSE ===== */
  areaZoom.addEventListener("mouseenter", () => {
    areaZoom.classList.add("zoom");
  });

  areaZoom.addEventListener("mouseleave", () => {
    areaZoom.classList.remove("zoom");
    imagemPrincipal.style.transformOrigin = "center center";
  });

  areaZoom.addEventListener("mousemove", (e) => {
    const rect = areaZoom.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    imagemPrincipal.style.transformOrigin = `${x}% ${y}%`;
  });

  /* ===== TROCA DE IMAGEM AO CLICAR ===== */
  miniaturas.forEach((img) => {
    img.addEventListener("click", () => {
      imagemPrincipal.src = img.src;

      miniaturas.forEach((i) => i.classList.remove("active"));
      img.classList.add("active");
    });
  });
});

/* ======================================
   ADICIONAR AO CARRINHO (GLOBAL)
   ====================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn-add-carrinho").forEach(botao => {
    botao.addEventListener("click", () => {

      const nome = botao.dataset.nome;
      const preco = botao.dataset.preco || 0;
      const imagem = botao.dataset.imagem || "";

      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

      const itemExistente = carrinho.find(item => item.nome === nome);

      if (itemExistente) {
        itemExistente.quantidade++;
      } else {
        carrinho.push({
          nome: nome,
          preco: preco,
          quantidade: 1,
          imagem: imagem
        });
      }

      localStorage.setItem("carrinho", JSON.stringify(carrinho));

      if (typeof atualizarBadgeCarrinho === "function") {
        atualizarBadgeCarrinho();
      }

      alert("Produto adicionado ao carrinho!");
    });
  });
});