// QUESTÃO 01
for(let i = 1; i <= 10 ; i++){
    console.log(i)
}
// QUESTÃO 02
for(let i = 10; i >= 1 ; i--){
    console.log(i)
}

// QUESTÃO 03
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {  
        console.log(i); 
    }
}


// QUESTÃO 04
for (let i = 1; i <= 20; i++){
    if( i % 2 != 0){
        console.log(i)
    }
    
}

// QUESTÃO 05
// for(let i = 1; i <= 100; i++){
//     let soma = i + i;
//     console.log(soma)
// }

let soma = 0;

for(let i = 1; i <= 100; i++){
    soma += i
}
console.log(soma)

// questão 06

let fatorial = 1
for( let i = 5; i >= 1; i--){
    fatorial *= i
}

console.log(fatorial)

const numero = Number(prompt("Digite um valor: "));
let fatorial = 1
for(let i = 1; i <= numero; i++){
    fatorial *= i
}
 console.log(fatorial)

 const numero = Number(prompt("Digite um valor: "));
let fatorial = 1
for(let i = numero; i >= 1; i--){
    fatorial *= i
}
console.log(fatorial)

// FOR TESTE
const frutas = [ "maça", "banana", "uva", "goiaba", "pera", "jambo"]
const numeros = [12, 3, 20, 7, 32, 1]
const pessoas= [
    {
        nome: 'Julia',
        cargo: 'desenvolvedora',
        idade: 26
    }]
    
for(const fruta of frutas){
    console.log(frutas)
}
    

// QUESTÃO 07
const cores = ['branco', 'azul', 'vermelho', 'rosa'];

for(let cor of cores){
    console.log(cor)
}


// questão 08
const palavra = prompt('Digite uma palavra: ');
const letras = palavra.split("")
let contador = 0
const vogais = ['A', 'E', 'I', 'O', 'U']

for(const letra of letras){
        if(vogais.includes(letra)){
            contador++
        }
        
}

console.log(contador)