import redline, { keyInYN, question, questionInt } from 'readline-sync'

let nomeDoador, idadeDoador, primeiraDoacao;

nomeDoador = question("Digite o seu nome: ");
idadeDoador = questionInt("Digite a sua idade: ");
primeiraDoacao = keyInYN("Primeira doacao de sangue? ");

if (idadeDoador >= 18 && idadeDoador <= 59){
    console.log(`${nomeDoador} está apto(a) para doar sangue!`)
}else if (idadeDoador >= 60 && primeiraDoacao == false){
    console.log(`${nomeDoador} está apto(a) para doar sangue!`)
}else {
    console.log(`${nomeDoador} não está apto(a) para doar sangue!`)
}