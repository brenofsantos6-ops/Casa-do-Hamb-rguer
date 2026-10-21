
const botoesAdicionar = document.querySelectorAll(".botao-adicionar");
const botaoCarrinho = document.querySelector("#botaoCarrinho");
const painelCarrinho = document.querySelector("#painelCarrinho");
const quantidadeCarrinho = document.querySelector("#quantidadeCarrinho");
const itensCarrinho = document.querySelector("#itensCarrinho");
const totalCarrinho = document.querySelector("#totalCarrinho");
const botaoFinalizar = document.querySelector("#botaoFinalizar");
const mensagem = document.querySelector("#mensagem");

let quantidade = 0;
let total = 0;

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

botaoCarrinho.addEventListener("click", function() {
    painelCarrinho.classList.toggle("fechado");
});

botoesAdicionar.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const nome = botao.dataset.nome;
        const preco = Number(botao.dataset.preco);

        quantidade++;
        total += preco;

        quantidadeCarrinho.textContent = quantidade;

        const item = document.createElement("div");
        item.classList.add("item-carrinho");
        item.textContent = nome + " - " + formatarPreco(preco);

        itensCarrinho.appendChild(item);

        totalCarrinho.textContent = formatarPreco(total);
        mensagem.textContent = "Produto adicionado ao carrinho!";
    });
});

botaoFinalizar.addEventListener("click", function() {
    if (quantidade === 0) {
        mensagem.textContent = "Adicione um produto antes de finalizar.";
        return;
    }

    mensagem.textContent =
        "Pedido registrado! Total: " + formatarPreco(total);
});
