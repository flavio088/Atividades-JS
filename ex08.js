//Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
//Desconto do IR:
//Salário Bruto até 900 (inclusive) - isento
//Salário Bruto até 1500 (inclusive) - desconto de 5%
//Salário Bruto até 2500 (inclusive) - desconto de 10%
//Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220
//A resposta do programa deverá ter a seguinte organização

reade = require("readline-sync")

const valorHora = Number(reade.question("Digite o valor da sua hora de trabalho: "));
const horasTrabalhadas = Number(reade.question("Digite a quantidade de horas trabalhadas no mês: "));

const salarioBruto = valorHora * horasTrabalhadas;
let ir = 0
let valorInss = 0

if (salarioBruto <= 900) {
  ir = 0;
} else if (salarioBruto <= 1500) {
  ir = salarioBruto * 0.05;
} else if (salarioBruto <= 2500) {
  ir = salarioBruto * 0.1;
} else {
  ir = salarioBruto * 0.2;
}

valorInss = salarioBruto * 0.1;
const fgts = salarioBruto * 0.11;
const totalDescontos = ir + valorInss + (salarioBruto * 0.03);
const salarioLiquido = salarioBruto - totalDescontos;

console.log("=============== CALCULADORA DE SALÁRIO ===============");
console.log("Salário Bruto:" +" "+ valorHora * horasTrabalhadas + ":"  + "R$" + salarioBruto)
console.log("(-) IR "+ (ir/salarioBruto*100) +"                  :"+"R$"+ ir );
console.log("(-) INSS ( 10%)"+"            :"+ "R$"+ valorInss);
console.log("(-)FGTS (11%)"+"                 :"+ "R$" + fgts);
console.log("(-)Total de descontos"+"         "+":"+"R$" + totalDescontos);
console.log("Salário Liquido            :"+ "R$"+salarioLiquido);
console.log("=======================================================");