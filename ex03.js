//Escreva um programa que identifique se a pessoa 
//deverá pagar meia entrada ou não no ingresso do cinema.

reade = require("readline-sync")
input = reade.question("Você é estudante, idoso ou outro : ").toLowerCase()
if (input == "estudante" || input == "idoso") {
  console.log("Você paga meia")
} else {
  console.log("Você paga inteira")
}