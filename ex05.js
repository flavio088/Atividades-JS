//Escreva um programa em javascript que permita inserir
//o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo 
//qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

reade = require("readline-sync")
c1 = reade.question("Qual a marca do seu carro ? \n")
v1 = + reade.question("Qual a velocidade em que se encontra ?\n")
c2 = reade.question("Qual a marca do segundo carro ?\n")
v2 = + reade.question("Qual a velocidade do segundo carro ?\n")

if (v1 > v2) {
  console.log(c1 +" "+ "é mais rápido")
} else if (v2 > v1) {
  console.log(c2 + " "+ "é mais rápido")
} else {
  console.log("os dois estão na mesma velocidade")
}