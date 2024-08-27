const prompt = require('prompt-sync')();

console.log("Escolha uma das opções:");
console.log("1. Dizer Olá");
console.log("2. Exibir data atual");
console.log("3. Sair");

let escolha = prompt("Digite o número da sua escolha: ");

switch (escolha) {
    case '1':
        console.log("Olá! Como você está?");
        break;
    case '2':
        let dataAtual = new Date();
        console.log("A data e hora atual é: " + dataAtual);
        break;
    case '3':
        console.log("Saindo do programa...");
        break;
    default:
        console.log("Opção inválida! Tente novamente.");
        break;
}
