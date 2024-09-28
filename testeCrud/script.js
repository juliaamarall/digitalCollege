let produtos = []

function criarProduto(){
    const produto = {id: produtos.length, nome, preco, categoria}
    produtos.push(produto)
     
}

criarProduto("mouse", 15.00, "informatica")
criarProduto("teclado", 25.00, "informatica")
criarProduto("mousepad", 1.00,"informatica")
criarProduto("monitor",35.0 ,"informatica")

function lerProdutos(){
    produtos.map((produto) => console.log(produto))
}

// lerProdutos()

function atualizarProduto(id, dadosNovos) {
    const indice = produtos.findIndex((produto) => {
        return produto.id === id
    })
    
    const dadosAntigos = produtos[indice]
    
    const produtoAtualizado = { 
        ...dadosAntigos, 
        ...dadosNovos
    }
    
    produtos[indice] = produtoAtualizado
}

const dadosNovos = { categoria: 'TESTE' }

atualizarProduto(0, dadosNovos)

console.log(produtos)



function deletarProdutos(id){
    const indice = produtos.findIndex((produto) => {
        return produto.id === id
    })
    produtos.splice(indice, 1)
}



function buscarProdutos(id){
      const indice = produtos.find((produto) => {
        return produto.id === id
    })
    
    console.log(produto)
    
}

buscarProdutos(0)