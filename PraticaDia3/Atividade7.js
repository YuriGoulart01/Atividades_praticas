import redline from 'readline-sync'

let vetor = []
let componenteDoVetor;

for (let i = 0; i < 10; i++){
    componenteDoVetor = redline.questionInt("Digite e confirme um numero para o vetor: ")
    vetor[i] = componenteDoVetor
}

let numeroParaBusca = redline.questionInt("Digite o numero que voce deseja encontrar: ");

let encontrado = false;
let posicao = -1;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeroParaBusca) {
        encontrado = true;
        posicao = i;
        break;
    }
}

if (encontrado) {
    console.log(`O número ${numeroParaBusca} está localizado na posição: ${posicao}`);
} else {
    console.log(`O número ${numeroParaBusca} não foi encontrado!`);
}