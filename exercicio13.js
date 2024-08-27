const prompt = require("prompt-sync")();

let soma = 0;
let quantidade = 0;
let numero;

do {
  numero = parseFloat(
    prompt("Digite um numero decimal (ou 0 para encerrar): ")
  );

  if (numero !== 0) {
    soma += numero;
    quantidade++;
  }
} while (numero !== 0);

if (quantidade > 0) {
  let media = soma / quantidade;
  console.log("A media aritmetica dos numeros é:", media);
} else {
  console.log("Nenhum numero valido foi inserido.");
}
