const prompt = require("prompt-sync")();

let quantidade = parseInt(prompt("Digite o número de maçãs compradas: "));

let precoPorUnidade;
if (quantidade < 12) {
  precoPorUnidade = 0.3;
} else {
  precoPorUnidade = 0.25;
}

let valorTotal = quantidade * precoPorUnidade;

console.log("O valor total da compra é: R$ " + valorTotal.toFixed(2));
