fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {
    for ( let index = 0; index < data.results.length; index++){
        const corpo = document.querySelector('.tablebody')
        const linha = document.createElement("tr")

        linha.innerHTML = `
        <th>${data.results[index].id}</th>
        <td>${data.results[index].name}</td>
        <td>${data.results[index].status}</td>
        <td>${data.results[index].species}</td>
        <td>${data.results[index].type}</td>
        <td><img src="${data.results[index].image}"></td>
        <td>${data.results[index].origin.name}</td>
        `

        corpo.appendChild(linha)
    }
})