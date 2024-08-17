// QUESTÃO 1
const a = Number(prompt("VALOR a: "));
const b = Number(prompt("VALOR b: "));
const c = Number(prompt("VALOR c: "));

const soma = a + b 

if(soma < c){
    console.log(true)
} else{
    console.log(false)
}

// QUESTÃO 2
const nome = prompt("Informe seu nome: ");
const sexo = prompt("Informe seu sexo: ");
const estadoCivil = prompt("Informe seu Estado Civil: ");

if(sexo === "feminino" && estadoCivil === "casada"){
    const casada = prompt("Quanto tempo de casada? ")
    console.log(` É casada a ${casada} anos`)
} else{
    console.log("Não é casado(a) ou é HOMEM")
}

// QUESTÃO 3

const num1 = Number(prompt("Digite um Número: "))

if(num1 % 2 === 0{
    console.log("Seu número é PAR")
}else{
    console.log("seu número é IMPAR")
}

    // QUESTÃO 4

const a = Number(prompt("Número 1: "));
const b = Number(prompt("Número 2: "));

if(a === b){
    const soma = a + b;
    console.log(`A soma dos valores iguais é ${soma}`)
} else {
    const mult = a * b;
    console.log(`A multiplicação dos valores é ${mult}`)
}


// QUESTÃO 5
const num1 = Number(prompt("Digite um número: "));

if(num1 > 0){
    const dobro = num1 * 2;
    console.log(`O dobro do número positivo é ${dobro}`)
} else {
    const triplo = num1 * 3;
    console.log(`O triplo do número negativo é ${triplo}`)
}

// QUESTÃO 7
const num1 = Number(prompt("Digite um número: "));

if(num1 % 2 === 0){
    const par = num1 + 5;
    console.log(`Seu número é PAR e a soma dele com o número 5 é ${par}`)
} else {
    const impar = num1 + 8;
    console.log(`Seu número é IMPAR e o valor somado com 8 é ${impar}`)
}

// QUESTÃO 08

const num1 = Number(prompt("Digite o PRIMEIRO NÚMERO: "));
const num2 = Number(prompt("Digite o SEGUNDO NÚMERO: "));
const num3 = Number(prompt("Digite o TERCEIRO NÚMERO: "));

const maior = Math.max(num1,num2,num3);
const menor = Math.min(num1,num2,num3);
const meio = (num1 + num2 + num3) - maior - menor;

console.log(maior, meio, menor)

// QUESTÃO 9
const sexo = prompt("digite seu sexo: ");
const altura = Number(prompt("digite sua altura: "));

console.log("--------------- VAMOS CALCULAR SEU PESO--------------")

if(sexo === "feminino"){
    const calculo1 = 62.1 * altura;
    console.log(`Seu peso ideal é ${calculo1}`);
} else if (sexo === "masculino") {
    const calculo2 = 72.7 * altura;
    console.log(`O seu peso ideal é ${calculo2}`)
} else{
    console.log("ERRO AO CALCULAR :(")
}

// QUESTÃO 10

const peso = Number(prompt("Digite seu  peso: "));
const altura = Number(prompt("Digite sua altura: "));

const imc = (peso / (altura ** 2));

if(imc < 18.5){
    console.log("Você esta ABAIXO DO PESO")
} else if (imc >= 18.5 && imc <= 25){
    console.log("Você esta com PESO NORMAL");
} else if (imc >= 25 && imc <= 30){
    console.log("Você esta ACIMA DO PESO")
} else{
    console.log("Você esta OBESO")
}