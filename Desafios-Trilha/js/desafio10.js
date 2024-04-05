/* Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: 
“LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY” */

let frase =
   "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let contar = 0;

for (let letra of frase) {
   if (letra >= "A" && letra <= "Z") {
      contar++;
   }
}

document.write(`O total d eletras maiusculas é ${contar}`);
