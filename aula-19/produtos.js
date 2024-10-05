let idSelecionado


let produtos = [
    { id: 1, nome: 'Mouse', preco: 200, categoria: 'Tecnologia' },
    { id: 2, nome: 'Monitor', preco: 600, categoria: 'Tecnologia' }
  ]
  
  function listarProdutos(){
    const listaDeProdutos = document.getElementById('lista-De-Produtos')
     listaDeProdutos.innerHTML = ''
    produtos.forEach((produto) => {
        listaDeProdutos.innerHTML += `  
            <tr>
              <td class="py-2 px-4 border-b text-left">${produto.nome}</td>
              <td class="py-2 px-4 border-b text-left"> R$ ${produto.preco}</td>
              <td class="py-2 px-4 border-b text-left">${produto.categoria}</td>

              <td class="py-2 px-4 border-b text-left"> 
               <button
                  type="button"
                  onclick="deletarProduto(${produto.id})"
                  class="h-10 bg-rose-700 px-4 rounded-md text-white"
                >
                  Excluir
                </button>
                <button
                   type="button"
                   onclick="abrirModal(${produto.id})"
                   class="h-10 bg-lime-600 px-4 rounded-md text-white"
                 >
                   Editar
                 </button>
              </td>
            </tr>
          `
      })
  }
  listarProdutos()

function deletarProduto(id){
    const indice = produtos.findIndex((produto) => {
        return produto.id === id
    })
    produtos.splice(indice, 1)
    listarProdutos()
}

function atulizarProduto(){
  const indice = produtos.findIndex((produto) => {
    return produto.id === idSelecionado
})
}


  function gerarId() {
    if (produtos.length <= 0) return 1
    const lastIndex = produtos.length - 1
    return produtos[lastIndex].id + 1
  }
  
  function abrirModal(id){
    idSelecionado = id
    const modal = document.getElementById('modal')

    modal.classList.remove('hidden')
    modal.classList.add('flex')

    const produto = produtos.find((prod) => prod.id === id)

    const nome = document.getElementById('nome-modal')

    nome.value = produto.nome
  }

  function fecharModal(){
    const modal = document.getElementById('modal')

    modal.classList.add('hidden')

  }
  function criarProduto() {
    const nome = document.getElementById('nome')
    const preco = document.getElementById('preco')
    const categoria = document.getElementById('categoria')
  
    const produto = {
      id: gerarId(),
      nome: nome.value,
      preco: preco.value,
      categoria: categoria.value
    }
  
    nome.value = ''
    preco.value = ''
    categoria.value = ''


    produtos.push(produto)
    console.log(produtos)
    listarProdutos()
    
  }