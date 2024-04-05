/*
2. Tais está participando de um sorteio na Loteria e recebeu uma lista de números
aleatórios para poder apostar. Os números foram: 15, 8, 90, 75, 102, 6 e 2. Por ser
bastante cautelosa, ela gostaria de saber qual é o menor número e qual é o maior número. 

Ajude Tais e escreva um programa que faça a lógica de programação para organização dos números,
receba os números da lista e imprima na tela o menor número digitado e o maior número digitado.
*/

let lista_numeros = [15, 8, 90, 75, 102, 6, 2];

let numero_menor = Math.min(...lista_numeros);
let numero_maior = Math.max(...lista_numeros);

document.write("O número menor é: " + numero_menor);
document.write("<br>");
document.write("O número maior é: " + numero_maior);
