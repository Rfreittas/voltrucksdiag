/* ===============================
   CARRINHO PAGE
   =============================== */

const lista = document.getElementById("listaCarrinho");
const totalEl = document.getElementById("totalCarrinho");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

/* ===== RENDER CARRINHO ===== */
function renderCarrinho() {
  if (!lista || !totalEl) return;

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    const preco = Number(item.preco) || 0;
    const quantidade = Number(item.quantidade) || 1;
    const subtotal = preco * quantidade;
    total += subtotal;

    lista.innerHTML += `
      <div class="item-carrinho">
        <div class="item-info">
          <h4>${item.nome}</h4>

          <div class="quantidade">
            <button onclick="alterarQtd(${index}, -1)">-</button>
            <span>${quantidade}</span>
            <button onclick="alterarQtd(${index}, 1)">+</button>
          </div>

          <button class="btn-remover" onclick="removerItem(${index})">
            Remover
          </button>
        </div>
      </div>
    `;
  });

  totalEl.textContent = `R$ ${total.toFixed(2)}`;
}

/* ===== ALTERAR QUANTIDADE ===== */
function alterarQtd(index, valor) {
  if (!carrinho[index]) return;

  carrinho[index].quantidade =
    Number(carrinho[index].quantidade) + valor;

  if (carrinho[index].quantidade <= 0) {
    carrinho.splice(index, 1);
  }

  salvarCarrinho();
}

/* ===== REMOVER ITEM ===== */
function removerItem(index) {
  carrinho.splice(index, 1);
  salvarCarrinho();
}

/* ===== SALVAR ===== */
function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderCarrinho();

  if (typeof atualizarBadgeCarrinho === "function") {
    atualizarBadgeCarrinho();
  }
}

/* ===== FINALIZAR VIA WHATSAPP ===== */
function finalizarWhatsApp() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio");
    return;
  }

  const numeroPedido = `VT-${Math.floor(Math.random() * 900000 + 100000)}`;
  let mensagem = `🛒 *NOVO PEDIDO*\n`;
  mensagem += `📦 *Pedido Nº:* ${numeroPedido}\n`;
  mensagem += `📅 *Data:* ${new Date().toLocaleDateString("pt-BR")}\n\n`;

  let total = 0;

  carrinho.forEach(item => {
    const preco = Number(item.preco) || 0;
    const quantidade = Number(item.quantidade) || 1;
    const subtotal = preco * quantidade;
    total += subtotal;

    mensagem += `• ${item.nome}\n`;
    mensagem += `  Qtd: ${quantidade}\n`;
    mensagem += `  Valor: R$ ${subtotal.toFixed(2)}\n\n`;
  });

  mensagem += `💰 *Total:* R$ ${total.toFixed(2)}`;

  const telefone = "5518998070775"; // SEU WHATSAPP
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

/* ===== INICIAR ===== */
document.addEventListener("DOMContentLoaded", renderCarrinho);