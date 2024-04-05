/* Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá 
receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar
o número da idade da pessoa como resultado. */

const data_de_nascimento = "2006-07-20";

function calcular_a_idade(data_de_nascimento) {
   const data_recente = new Date();
   const ano_de_nascimento = new Date(data_de_nascimento).getFullYear();
   const ano_recente = data_recente.getFullYear();

   return ano_recente - ano_de_nascimento;
}

const idade_da_pessoa = calcular_a_idade(data_de_nascimento);
document.write(`A idade da pessoa é: ${idade_da_pessoa}`);