

    // QUESTÃO 01
const num01 = 10;
const num02 = 20;

if(num01 < num02){
    console.log(`O maior número é ${num02}`);
}else{
    console.log(`O NUM01 é maior`);
}

    // QUESTÃO 02
const valor1 = prompt("Digite um número: ");
const valor2 = prompt("Digite outro número: ")

if(valor1 > valor2){
    console.log(true)
}else{
    console.log(false)
}

// QUESTÃO 03

const num1 = prompt("Digite um número: ");
const num2 = prompt("Digite outro número: ");

if(num1===num2){
    console.log(true)
} else {
   console.log(false) 
}

    // QUESTÃO 04

    const idade = prompt("Digite sua idade: ")

if(idade >= 18){
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade")
}


// QUESTÃO 05

const num1 = parseFloat(prompt("Digite um número: "));
const num2 = parseFloat(prompt("Digite um número: "));

if(num1 <= num2){
    console.log(true)
} else{
    console.log(false)
}

// QUESTÃO 06

const num1 = Number(prompt("Número 1: "));


if(num1 > 50 && num1 < 100){
    console.log(true)
} else{
    console.log(false)
}
    // QUESTÃO 07

    const num1 = Number(prompt("Digite um número: "));

if( num1 < 0 ){
    console.log(true)
} else{
    console.log(false)
}

    // QUESTÃO 08
    const num1 = Number(prompt("Número 1: "));
const num2 = Number(prompt("Número 2: "));

if( num1 >= num2){
    console.log(true)
} else{
    console.log(false)
}
    // QUESTÃO 09

    const num1 = Number(prompt("Digite um número: "));

if( num1 % 5 === 0){
    console.log(true)
} else{
    console.log(false)
}

    // QUESTÃO 10

    const num = Number(prompt("Número: "));

if( num === 0 || num > 10){
    console.log(true)
} else{
    console.log(false)
}