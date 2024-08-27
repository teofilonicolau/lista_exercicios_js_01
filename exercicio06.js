const prompt = require("prompt-sync")();

let A = parseFloat(prompt("Digite o valor do lado A: "));
let B = parseFloat(prompt("Digite o valor do lado B: "));
let C = parseFloat(prompt("Digite o valor do lado C: "));

if (A < B + C && B < A + C && C < A + B) {
  console.log("Os lados formam um triângulo.");

  if (A === B && B === C) {
    console.log("O triangulo é Equilatero.");
  } else if (A === B || A === C || B === C) {
    console.log("O triangulo é Isosceles.");
  } else {
    console.log("O triangulo é Escaleno.");
  }
} else {
  console.log("Os lados fornecidos não formam um triangulo.");
}
