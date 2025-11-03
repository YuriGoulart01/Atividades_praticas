import redline, { keyInYN } from 'readline-sync'

let totalBackend = 0;
let totalMulheresFrontend = 0;
let totalHomensMobile40 = 0;
let totalNaoBinariosFullStack30 = 0;
let totalPessoas = 0;
let somaIdades = 0;
let continuar = true

while (continuar) {
    let idade = redline.questionInt("Digite a idade: ");
    console.log("Identidade de Gênero:");
    console.log("1 - Mulher Cis");
    console.log("2 - Homem Cis");
    console.log("3 - Não Binário");
    console.log("4 - Mulher Trans");
    console.log("5 - Homem Trans");
    console.log("6 - Outros");
    let genero = redline.questionInt("Digite o numero correspondente: ");

    console.log("\nPessoa Desenvolvedora:");
    console.log("1 - Backend");
    console.log("2 - Frontend");
    console.log("3 - Mobile");
    console.log("4 - FullStack");
    let tipoDev = redline.questionInt("Digite o numero correspondente: ");

    totalPessoas++;
    somaIdades += idade;

    if (tipoDev === 1) {
        totalBackend++;
    }

    if ((genero === 1 || genero === 4) && tipoDev === 2) {
        totalMulheresFrontend++;
    }

    if ((genero === 2 || genero === 5) && tipoDev === 3 && idade > 40) {
        totalHomensMobile40++;
    }

    if (genero === 3 && tipoDev === 4 && idade < 30) {
        totalNaoBinariosFullStack30++;
    }

    continuar =  redline.keyInYN("Deseja continuar ? ")
    console.log();
}

let mediaIdade =somaIdades / totalPessoas;

console.log("\n=== RESULTADOS DA PESQUISA ===");
console.log(`Número de pessoas desenvolvedoras Backend: ${totalBackend}`);
console.log(`Número de Mulheres Cis e Trans desenvolvedoras Frontend: ${totalMulheresFrontend}`);
console.log(`Número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${totalHomensMobile40}`);
console.log(`Número de Não Binários desenvolvedores FullStack menores de 30 anos: ${totalNaoBinariosFullStack30}`);
console.log(`Número total de pessoas que responderam à pesquisa: ${totalPessoas}`);
console.log(`Média de idade das pessoas que responderam à pesquisa: ${mediaIdade}`);
