const titulo = document.getElementById('titulo')
titulo.innerText = "olá julia"
console.log(titulo.innerText)

const produtos = ["RAM", "ROM", "MOUSEPAD", "PLACA-MAE"]

const lista = document.getElementById('lista-produtos')



produtos.forEach((produto) => {
  lista.innerHTML += `  
    <li>${produto}</li>
    `
})

