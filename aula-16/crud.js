let crudAlunos = [];

function criarAluno(nome, serie, idade) {
    const id = crudAlunos.length;
    const novoAluno = { id, nome, serie, idade };
    crudAlunos.push(novoAluno);
}


function lerAluno(id){
    const aluno = crudAlunos.find((aluno) => aluno.id === id)
     if (!aluno) return console.log('Não foi encontrado aluno com esse ID')
    console.log(aluno)
}
// Criando um aluno
criarAluno('João', '8-A', 13);
criarAluno('João', '8-A', 13);
criarAluno('João', '8-A', 13);
criarAluno('João', '8-A', 13);

//lendo aluno
lerAluno(0)

function atualizarAluno(id, dadosNovos){
    const index = crudAlunos.findIndex((aluno) => aluno.id === id)
    if(index === -1) return console.log('Não foi encontrado aluno com esse ID')
    const dadosAntigos = crudAlunos[index]
    crudAlunos[index] = {...dadosAntigos, ...dadosNovos}
}



function deletarAluno(){
    const index = crudAlunos.findIndex((aluno) => aluno.id === id)
}
 crudAlunos.splice(0, 1)
// atualizarAluno(0, {nome:'zezim', serie: '2-a'})
console.log(crudAlunos)