fetch('https://narutodb.xyz/api/character')
.then(response => response.json())
.then(data => {
    for ( let index = 0; index < data.characters.length; index++){
        const corpo = document.querySelector('.tablebody')
        const linha = document.createElement("tr")

        linha.innerHTML = `
        <th>${data.characters[index].id}</th>
        <td>${data.characters[index].name}</td>
        <td>${data.characters[index].jutsu}</td>
        <td>${data.characters[index].personal}</td>
        <td><img src="${data.characters[index].images}"></td>
       
        `

        corpo.appendChild(linha)
    }
})