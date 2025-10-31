import redline, { question, questionFloat, questionInt } from 'readline-sync'

let numero1, numero2, codigoOperador, resultado;

console.log("===================================");
console.log("           CALCULADORA");
console.log("===================================");
console.log("Cód | Operação");
console.log("-----------------------------------");
console.log(" 1  | Soma");
console.log(" 2  | Subtração");
console.log(" 3  | Multiplicação");
console.log(" 4  | Divisão");
console.log("===================================");

codigoOperador = questionInt("Digite o codigo da operacao: ");
numero1 = questionFloat("Digite o primeiro numero: ");
numero2 = questionFloat("Digite o segundo numero: ");

switch(codigoOperador){
    case 1:
        resultado = numero1 + numero2;
        break;
    case 2:
        resultado = numero1 - numero2;
        break;
    case 3:
        resultado = numero1 * numero2;
        break;
    case 4:
        resultado = numero1 / numero2;
        break;
    default:
        console.log("Operação inválida!");
        process.exit();
    }

console.log(`O seu resultado foi ${resultado}`);