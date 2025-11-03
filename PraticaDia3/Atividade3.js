import redline, { question } from 'readline-sync'

let menores21 = 0;
let maiores50 = 0;
let idade;

while (true) {
    idade = redline.questionInt("Digite a sua idade: ");
    if (idade < 0) {
        console.log("Idade inválida")
        break
    }
    if (idade < 21) {
        menores21++
    }
    if (idade > 50){
        maiores50++
    }
};
console.log(`Total de pessoas menores de 21 anos: ${menores21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiores50}`);