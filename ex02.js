//Escreva um programa que receba um número e diga se o número digitado é impar ou par.

reade = require("readline-sync")
num1 = reade.question("Informe um número :")

if (num1 % 2 == 0) {
  console.log("Esse valor é par")
} else {
  console.log("Esse valor é ímpar")
}
