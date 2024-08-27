const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Digite seu peso em kg: "));
let altura = parseFloat(prompt("Digite sua altura em metros: "));

let imc = peso / (altura * altura);

let categoria;

if (imc < 18.5) {
  categoria = "Baixo peso";
} else if (imc >= 18.5 && imc < 24.9) {
  categoria = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
  categoria = "Sobrepeso";
} else {
  categoria = "Obesidade";
}

console.log("Seu IMC é: " + imc.toFixed(2));
console.log("Categoria de peso: " + categoria);
