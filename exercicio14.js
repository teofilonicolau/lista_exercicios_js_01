const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um numero para calcular o fatorial: "));

function calcularFatorial(n) {
  let fatorial = 1;

  for (let i = 1; i <= n; i++) {
    fatorial *= i;
  }

  return fatorial;
}

if (numero < 0) {
  console.log("O fatorial não é definido para numeros negativos.");
} else {
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}.`);
}
