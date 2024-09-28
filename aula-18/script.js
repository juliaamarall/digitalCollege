const produtos = [
    { id: 1, nome: "Laptop", categoria: "Electronics", preco: 999.99 },
    { id: 2, nome: "Smartphone", categoriia: "Electronics", preco: 699.99 },
    { id: 3, nome: "Runing Shoes", categoria: "Sports", preco: 89.99 },
    { id: 4, nome: "Coffee Maker", categoria: "Home Appliances", preco: 49.99 },
    { id: 5, nome: "Backpack", categoria: "Accessories", preco: 39.99 },
  ]


const nome = document.getElementById('nome')
const cat = document.getElementById('categoria')
const preco = document.getElementById('preco')

// console.log(nome)
// console.log(categoria)
// console.log(preco)

function imprimirDadosDoFormulario(){
    const produto = {
       nome: nome.value,
       categoria: categoria.value,
       preco: preco.value

    }
    produtos.push(produto)
}



console.log(produtos)