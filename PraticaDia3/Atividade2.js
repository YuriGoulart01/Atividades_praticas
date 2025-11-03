import redline, { question } from 'readline-sync'

let impares = 0;
let pares = 0;

for (let i = 0; i < 10; i++){
    let numero = redline.questionInt("Digite seu numero: ");
    if (numero % 2 === 0) {
        ++pares
    }else {
        ++impares
    }
}

console.log(`Total de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);