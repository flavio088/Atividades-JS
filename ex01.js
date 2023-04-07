//Escreva um programa que peça ao usuário
// o sexo e a idade e retorne a mensagem 
//informando se é ou não uma criança, e qual gênero se trata

reade = require("readline-sync")
idade = +reade.question("Informe sua idade:")
sexo = reade.question("Informe seu sexo: ")

if (idade <= 9) {
  console.log("Você é um muleke")
} else if (idade > 9) {
  console.log("Você não muleke")
}

if (sexo == "m" || sexo == "M") {
  console.log("Você é do sexo masculino")
} else if (sexo == "F" || sexo == "f") {
  console.log("Você é do sexo feminino")
} else {
  console.log("Informe seu sexo")
}