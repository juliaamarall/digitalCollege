// QUESTÃO 1
const numero = Number(prompt("Digite um Número: "));

if( numero > 0){
    console.log("Este é um número POSITIVO")
} else if ( numero < 0){
    console.log("Este é um número NEGATIVO")
} else {
    console.log("Este número é igual a ZERO")
}

// QUESTÃO 2
// Validação de Data

// Crie um algoritmo que leia o dia, mês e ano e verifique se a data é válida.
// QUESTÃO 3
const idade = Number(prompt("Digite sua idade: "));

if(idade > 0 && idade <= 12){
    console.log("Você é uma CRIANÇA")
} else if ( idade >= 13 && idade <= 17){
    console.log("Você é ADOLESCENTE")
} else if (idade >= 18 && idade <=  64){
    console.log("Você é ADULTO")
} else {
    console.log("Você é IDOSO")
}
// QUESTÃO 4
const nota1 = Number(prompt("NOTA 1°: "));
const nota2 = Number(prompt("NOTA 2°: "));
const nota3 = Number(prompt("NOTA 3°: "));

const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7){
    console.log("Aprovado")
} else if(media <= 5 || media < 7){
    console.log("Recuperação")
} else{
    console.log("Reprovado")
}
// QUESTÃO 5
// Verificação de Letra Inicial

// Escreva um algoritmo que leia um nome e verifique se ele começa com a letra "A".
// QUESTÃO 6
// Verificação de Palíndromo

// Crie um algoritmo que leia uma palavra e verifique se ela é um palíndromo (lê-se igual de frente para trás).
// QUESTÃO 7

// QUESTÃO 8
// QUESTÃO 9
// QUESTÃO 10