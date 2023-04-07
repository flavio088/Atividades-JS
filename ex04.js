//Crie um programa que recebe duas notas (entre 0.0 e 10.0),
// calcula sua média e checa se você passou direto, foi para a final ou foi reprovado direto.


let reade = require("readline-sync")
let nota1
let nota2
do{
  nota1 = Number(reade.question("Qual é a sua nota 1 ?\n"))
  if(nota1 <0 || nota1>10){
    console.log("Nota invalida tente novamente.")
  }
}while(nota1 <0 || nota1>10){}
do{
  nota2 = Number(reade.question("Qual é a sua nota 2 ? \n"))
}while(nota2 <=0 || nota2 >= 10 ){}

let media = (nota1 + nota2) / 2

if(media >= 7){
  console.log("Você foi aprovado!")
}else if (media >= 5 ){
  console.log("Você foi para final")
}else{
  console.log("Você foi reprovado")
}