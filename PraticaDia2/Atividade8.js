import redline, { question, questionFloat, questionInt } from 'readline-sync'

let saldo = 1000.00
let operacao,valor;

console.log("===================================");
console.log("        SISTEMA BANCÁRIO");
console.log("===================================");
console.log("Cód | Operação");
console.log("-----------------------------------");
console.log(" 1  | Saldo");
console.log(" 2  | Saque");
console.log(" 3  | Depósito");
console.log("===================================");

operacao = questionInt("Digite o numero da operacao: ");

switch(operacao) {
    case 1:
        console.log(`Seu saldo é R$ ${saldo.toFixed(2)}`);
        break;
    case 2:
        valor = questionFloat("Qual o valor para o saque ?");
        if (saldo >= valor){
            saldo = saldo - valor
            console.log("Operação: Saque");
            console.log(`Seu novo saldo é R$ ${saldo.toFixed(2)}`);
        }else {
            console.log("Saldo insuficiente");
        }
        break;
    case 3:
        valor = questionFloat("Qual o valor para o deposito ?");
        saldo = saldo + valor;
        console.log(`Seu novo saldo é R$ ${saldo.toFixed(2)}`);
        break;
    default:
        console.log("Operação inválida");
        process.exit();
}

