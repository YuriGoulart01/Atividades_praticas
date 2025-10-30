import  redline, { questionInt } from 'readline-sync'

let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = questionInt("Digite a primeira nota: ")
nota2 = questionInt("Digite a segunda nota: ")
nota3 = questionInt("Digite a terceira nota: ")
nota4 = questionInt("Digite a quarta nota: ")
media = (nota1 + nota2 + nota3 + nota4)/4

console.log(media)