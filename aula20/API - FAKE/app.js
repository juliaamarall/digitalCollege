fetch('https://67140728690bf212c7607f76.mockapi.io/teste/TESTEAPI')
.then(response => response.json())
.then(data => {
    for ( let index = 0; index < data.length; index++){
        const corpo = document.querySelector('.tablebody')
        const linha = document.createElement("tr")

        linha.innerHTML = `
        <th>${data[index].id}</th>
        <td>${data[index].cidade}</td>
        <td>${data[index].endereco}</td>
        <td>${data[index].email}</td>
        <td>${data[index].numero}</td>
       
        `

        corpo.appendChild(linha)
    }
})