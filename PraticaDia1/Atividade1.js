import redline, { questionFloat, questionInt } from 'readline-sync'

let salario;
let abono;
let novoSalario;

salario = questionFloat ("Digite seu salario: ")
abono = questionFloat ("Digite o valor do abono: ")
novoSalario = salario + abono
console.log(
  "O seu novo salário é de:",
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(novoSalario)
);