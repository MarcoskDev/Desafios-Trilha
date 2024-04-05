/*
Escreva um programa para 
encontrar o fatorial do número 12.
*/

let numero = 12;

function calcular(numero) {
   if (numero === 0 || numero === 1) {
      return 1;
   } else {
      return numero * calcular(numero - 1);
   }
}

const fatorial = calcular(numero);
document.write(`O fatorial de 12 é ${fatorial}`);
