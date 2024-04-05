/*
Escreva um programa que conte o número de palavras em uma frase
fornecida pelo usuário. A frase é: "What is Lorem Ipsum?"
*/

let frase = "What is Lorem Ipsum?";

function contagem(frase) {
   frase = frase.trim();

   let palavras = frase.split(" ");

   return palavras.length;
}

let totalDePalavras = contagem(frase);
document.write(`A frase contem ${totalDePalavras} palavras`);
