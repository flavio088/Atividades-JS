//Faça um Programa que leia três números e mostre o maior deles.

reade = require("readline-sync")
let num1 = Number(reade.question("Digite um número: "))
let num2 = Number(reade.question("Digite outro número: "))
let num3 = Number(reade.question("Digite mais um número: "))

if(num1 > num2 && num1 > num3){
  console.log("O"+" "+num1+" "+"é maior")
}else if(num2 > num1 && num2 > num3){
  console.log("O"+" "+num2+" "+"é maior")
}else{
  console.log("O"+" "+num3+" "+"é maior")
}