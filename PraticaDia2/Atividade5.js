import redline, { questionInt } from 'readline-sync'

let numeroPedido, quantidade, precoUnidade, nomeProduto, valorPedido;

console.log("==============================================");
console.log("                CARDÁPIO");
console.log("==============================================");
console.log("Cód | Produto           | Preço Unitário");
console.log("----------------------------------------------");
console.log(" 1  | Cachorro Quente   | R$ 10.00");
console.log(" 2  | X-Salada          | R$ 15.00");
console.log(" 3  | X-Bacon           | R$ 18.00");
console.log(" 4  | Bauru             | R$ 12.00");
console.log(" 5  | Refrigerante      | R$  8.00");
console.log(" 6  | Suco de Laranja   | R$ 13.00");
console.log("==============================================");

numeroPedido = questionInt("Qual o numero do seu pedido ? ");
quantidade = questionInt("Qual a quantidade de lanches que voce quer ? ");

switch (numeroPedido) {
    case 1:
        nomeProduto = "Cachorro quente";
        precoUnidade = 10.00;
        break;
    case 2:
        nomeProduto = "X-Salada";
        precoUnidade = 15.00;
        break;
    case 3:
        nomeProduto = "X-Bacon";
        precoUnidade = 18.00;
        break;
    case 4:
        nomeProduto = "Bauru";
        precoUnidade = 12.00;
        break;
    case 5:
        nomeProduto = "Refrigerante";
        precoUnidade = 8.00;
        break;
    case 6:
        nomeProduto = "Suco laranja";
        precoUnidade = 13.00;
        break;
    default:
        console.log("Produto não encontrado");
        process.exit();
}

valorPedido = quantidade * precoUnidade

console.log("\n==============================================");
console.log(`Produto: ${nomeProduto}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preço unitário: R$ ${precoUnidade.toFixed(2)}`);
console.log("----------------------------------------------");
console.log(`Total a pagar: R$ ${valorPedido.toFixed(2)}`);
console.log("==============================================");