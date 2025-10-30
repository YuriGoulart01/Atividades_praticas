import redline, { questionInt } from 'readline-sync'

let salario;
let abono;
let novoSalario;

salario = questionInt ("Digite seu salario: ")
abono = questionInt ("Digite o valor do abono: ")
novoSalario = salario + abono
console.log(novoSalario)