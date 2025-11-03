import redline from 'readline-sync'

let primeiroNumero, segundoNumero;

primeiroNumero = redline.questionInt("Digite o primeiro numero: ");
segundoNumero = redline.questionInt("Digite o segundo numero: ");

if (segundoNumero <= primeiroNumero){
    console.log("Intervalo inválido!")
}else{
    console.log(`No intervalo entre ${primeiroNumero} e ${segundoNumero}`)
    for (let numero = primeiroNumero; numero <= segundoNumero; numero++){
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(`${numero} é multiplo de 3 e 5`)}
    }
}