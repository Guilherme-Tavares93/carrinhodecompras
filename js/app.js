let totalGeral ;
limpar ();

function adicionar(){
// recuperar valores nome do produto, quantidade e valor 
let produto = document.getElementById("produto").value;
let nomeproduto = produto.split("-")[0];
let valorUnitario = produto.split("R$")[1];
let quantidade = document.getElementById("quantidade").value;
// calcular o preço, o nosso subtotal
let preco = quantidade * valorUnitario;
let carrinho = document.getElementById("lista-produtos");
//adicionar carrinho
carrinho.innerHTML =  carrinho.innerHTML  +  ` <section class="carrinho__produtos" id="lista-produtos">
<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}</span> ${nomeproduto} <span class="texto-azul">R$${preco}</span>
</section>`;
//Valor Total

totalGeral = totalGeral + preco;
let campoTotal = document.getElementById("valor-total");
campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById("quantidade") = 0;
}

function limpar(){
  let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$ 0";
}
