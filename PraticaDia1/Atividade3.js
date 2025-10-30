import redline, { questionFloat, questionInt } from 'readline-sync'

let salarioBruto;
let adicionalNoturno;
let valorHoraExtra;
let horasExtras;
let desconto;
let salarioLiquido;

salarioBruto = questionFloat("Digite o valor do seu salario bruto : ");
adicionalNoturno = questionFloat("Digite o valor do seu adicional noturno: ");
valorHoraExtra = 100.00
horasExtras = questionInt("Digite a sua quantidade de horas extras: ");
desconto = questionFloat("Digite o valor dos descontos: ");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * valorHoraExtra) - desconto

console.log(`seu salario liquido é ${salarioLiquido.toFixed(2)}`)

