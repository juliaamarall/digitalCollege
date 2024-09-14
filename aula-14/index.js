//questão 01


function calcularMedia(notas){
    let soma = 0
     for ( const nota of notas){
        soma += nota
     }
     return (soma / notas.length).toFixed(2)
    
    }
    
    const media = calcularMedia([10,9,10])
    
    console.log(media)

// questão 02

const nums = [15,22,35,48,55,70,85,100]

const maioresQue40 = nums.filter((num) => {
     if(num > 40){
        return  num
     }
})

console.log(maioresQue40)

//questão 03

const original = [5,10,15,20]
 original.push(25)
 original.unshift(0)
 
 console.log(original)

 // ---- push = adiciona elementos no final
 //------ unshift = adiciona elementos no começo


 //questão 04
 const antigoArray = [10,20,30,40]

const novoArray = antigoArray.map((numero =>{
  return numero * 2
    
}))
 
 console.log(novoArray)

 //questão 05

 const nome = ['julia','camila','margot']

nome.forEach((nome) => console.log(nome))

//outro metodo de fazer a quinta questão

const nomes = ['julia','camila','margot']

for ( const nome of nomes) console.log(nome)


    //questão 07

    const precos = [100,200,300,400,500]
    const precosDescontados = precos.map((valor) => valor * 0.9)
    const precosFiltrados = precosDescontados.filter((valor) => valor < 350)
    
    console.log(precosFiltrados)