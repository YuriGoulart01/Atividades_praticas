import redline, { question, questionFloat, questionInt } from 'readline-sync'

let cargo,numCargo,nomeColaborador,salarioAtual,novoSalario, percentualReajuste;

console.log("==============================================");
console.log("              TABELA DE CARGOS");
console.log("==============================================");
console.log("Cód | Cargo          | Percentual de Reajuste");
console.log("----------------------------------------------");
console.log(" 1  | Gerente        | 10%");
console.log(" 2  | Vendedor       |  7%");
console.log(" 3  | Supervisor     |  9%");
console.log(" 4  | Motorista      |  6%");
console.log(" 5  | Estoquista     |  5%");
console.log(" 6  | Técnico de TI  |  8%");
console.log("==============================================");

nomeColaborador = question("Digite o seu nome: ");
numCargo = questionInt("Digite o numero do seu cargo conforme a tabela acima: ");
salarioAtual = questionFloat("Digite seu salario atual: ");

switch (numCargo){
    case 1:
        cargo = "Gerente";
        percentualReajuste = 10;
        break;
    case 2:
        cargo = "Vendedor";
        percentualReajuste = 7;
        break;
    case 3:
        cargo = "Supervisor";
        percentualReajuste = 9;
        break;
    case 4:
        cargo = "Motorista";
        percentualReajuste = 6;
        break;
    case 5:
        cargo = "Estoquista";
        percentualReajuste = 5;
        break;
    case 6:
        cargo = "Técnico de TI";
        percentualReajuste = 8;
        break;
    default:
        console.log("Função não encontrada.");
        process.exit();
}

novoSalario = salarioAtual + (salarioAtual * percentualReajuste/100);

console.log("\n==============================================");
console.log(`Nome: ${nomeColaborador}`)
console.log(`Cargo: ${cargo}`);
console.log("----------------------------------------------");
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
console.log("==============================================");