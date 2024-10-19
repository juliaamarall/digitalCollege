

const buscarDados = async () => {
    const response = await fetch('https://gsi.fly.dev/characters')

    const data = await response.json()
    
    let corpo = document.querySelector('.tablebody')

    for ( let index = 0; index < data.results.length; index++){
        const linha = document.createElement("tr")

        linha.innerHTML = `
        <th>${data.results[index].id}</th>
        <td>${data.results[index].name}</td>
        <td>${data.results[index].rarity}</td>
        <td>${data.results[index].weapon}</td>
        <td>${data.results[index].vision}</td>
        
        `

        corpo.appendChild(linha)

    }
}
buscarDados()