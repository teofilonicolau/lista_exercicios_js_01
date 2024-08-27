function gerarFibonacci(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    let proximo = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(proximo);
  }

  return fibonacci;
}

const numeroTermos = 10;

let sequenciaFibonacci = gerarFibonacci(numeroTermos);

console.log(
  `Os primeiros ${numeroTermos} numeros da sequencia de Fibonacci são:`
);
console.log(sequenciaFibonacci.join(", "));
