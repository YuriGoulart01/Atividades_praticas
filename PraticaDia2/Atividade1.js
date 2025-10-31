import redline, { questionInt } from 'readline-sync'

let numero1, numero2, numero3;

numero1 = questionInt("Digite o primeiro numero: ");
numero2 = questionInt("Digite o segundo numero: ");
numero3 = questionInt("Digite o terceiro numero: ");

if ((numero1 + numero2) > numero3) {
    console.log("A soma dos numeros 1 e 2 é maior que o numero 3.")
}else if ((numero1 + numero2) === numero3){
    console.log("A soma dos numeros 1 e 2 é igual ao numero 3.")
}else {
    console.log("A soma dos numeros 1 e 2 é menor que o numero 3.")
}