import redline from 'readline-sync'

let somaMultiplosDe3 = 0;
let resultadoMedia = 0.0
let contador = 0
let numero;

do {
  numero = redline.questionInt("Digite um numero (digite 0 para sair): ");

  if (numero !== 0 && numero % 3 === 0) {
    somaMultiplosDe3 += numero;
    ++contador;
  }

} while (numero !== 0);

resultadoMedia = somaMultiplosDe3 / contador

console.log(`A média dos multiplos de 3 é: ${resultadoMedia.toFixed(2)}`);