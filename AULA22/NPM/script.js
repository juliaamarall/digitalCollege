// REVISÃO SOBRE PROMISES + ASYNC / AWAIT
// FETCH API
// METHODS HTTP
// CORPO DA REQUISIÇÃO (BODY)
// CABEÇALHO DA REQUISIÇÃO (HEADERS)

async function openModal(id) {
    await getProductById(id)
  
    const modal = document.getElementById('modal')
  
    modal.classList.remove('hidden')
    modal.classList.add('flex')
  
    const updateButton = document.getElementById('patch-button')
  
    updateButton.onclick = async function () {
      await patchProduct(id)
      await getProducts()
      closeModal()
    }
  }
  
  function closeModal() {
    const modal = document.getElementById('modal')
  
    modal.classList.add('hidden')
    modal.classList.remove('flex')
  }
  
  const API_BASE_URL = 'http://192.168.6.93:3333/api'
  
  async function getProducts() {
    try {
      const response = await fetch(API_BASE_URL + '/products/?page_size=100')
      const { results } = await response.json()
      listingProducts(results)
    } catch (error) {
      console.error(error)
    }
  }
  
  getProducts()
  
  function listingProducts(products) {
    const listProducts = document.getElementById('lista-produtos')
    
    listProducts.innerHTML = ""
    
    products.forEach((product) => {
      listProducts.innerHTML += `
        <tr>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.category}</td>
          <td>
            <button onclick="openModal(${product.id})" >Editar</button>
            <button onclick=" deleteProduct(${product.id})">Deletar</button>
          </td>
        </tr>
      ` 
    })
  }
  
  async function postProduct() {
    const nome = document.getElementById('nome')
    const preco = document.getElementById('preco')
    const categoria = document.getElementById('categoria')
  
    const product = {
      name: nome.value,
      price: preco.value,
      category: categoria.value,
    }
    
    try {
      await fetch(API_BASE_URL + '/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
      })
  
      await getProducts()
    } catch (error) {
      console.error(error)
    }
  }
  
  async function getProductById(id) {
    const nome = document.getElementById('nome-modal')
    const preco = document.getElementById('preco-modal')
    const categoria = document.getElementById('categoria-modal')
  
    try {
      const response = await fetch(API_BASE_URL + '/products/' + id)
      const product = await response.json()
      
      nome.value = product.name
      preco.value = product.price
      categoria.value = product.category
  
    } catch (error) {
      console.error(error)
    }
  }
  
  async function patchProduct(id) {
    const nome = document.getElementById('nome-modal')
    const preco = document.getElementById('preco-modal')
    const categoria = document.getElementById('categoria-modal')
  
    const product = {
      name: nome.value,
      category: categoria.value,
      price: preco.value,
    }
    
    try {
      await fetch(API_BASE_URL + '/products/' + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
        
      })
      await getProducts()
    } catch (error) {
      console.error(error)
    }
  }


  async function deleteProduct(id) {
    try {
      await fetch(API_BASE_URL + '/products/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
    
      })
      await getProducts()
    } catch (error) {
      console.error(error);
      
    }
  }
  
  // ATIVIDADE
  // CRIAR CRUD DE PRODUTOS UTILIZANDO API
  
  // PRIMEIRO PASSO -> CRIAR FUNÇÃO QUE RECEBA TODOS OS PRODUTOS
  // SEGUNDO PASSO -> MONTAR OS PRODUTOS NA TABELA
  // TERCEIRO PASSO -> CRIAR FUNÇÃO PARA CADASTRAR OS PRODUTOS
  // QUARTO PASSO -> CARREGAR AS INFORMAÇÕES DO PRODUTO (INDIVIDUALMENTE)
  // QUINTO PASSO -> ATUALIZAR O PRODUTO, COM AS NOVAS INFORMAÇÕES NO MODAL