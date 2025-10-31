import redline, { questionInt } from 'readline-sync'

let numeroEntrada;

numeroEntrada = questionInt("Digite o numero escolhido: ");

if (numeroEntrada % 2 === 0 && numeroEntrada > 0){
    console.log(`O numero ${numeroEntrada} é um numero par e positivo.`)
}else if (numeroEntrada % 2 === 0 && numeroEntrada < 0 ) {
    console.log(`O numero ${numeroEntrada} é um numero par e negativo.`)
}else if (numeroEntrada % 2 !== 0 && numeroEntrada > 0){
    console.log(`O numero ${numeroEntrada} é impar e positivo.`)
}else {
    console.log (`O numeor ${numeroEntrada} é impar e negativo.`)
}