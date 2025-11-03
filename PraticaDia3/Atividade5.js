import redline from 'readline-sync'

let somaPositivos = 0;
let numero;

do {
  numero = redline.questionInt("Digite um numero (digite 0 para sair): ");

  if (numero > 0) {
    somaPositivos += numero;
  }

} while (numero !== 0);

console.log(`A soma dos números positivos é: ${somaPositivos}`);
