import { questionInt } from "readline-sync";

let numero1;
let numero2;
let numero3;
let numero4;
let diferenca;

numero1 = questionInt("Digite o primeiro numero: ");
numero2 = questionInt("Digite o segundo numero: ");
numero3 = questionInt("Digite o terceiro numero: ");
numero4 = questionInt("Digite o quarto numero: ");
diferenca = (numero1 * numero2) - (numero3 * numero4)

console.log(`A diferenca entre os resultados e: ${diferenca}`)