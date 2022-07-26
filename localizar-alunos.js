const alunos = ["joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

const mediaDosAlunos = [10, 6.5, 8, 7.5, 5, 2];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ' sua nota e ' + listaDeNotasEAlunos[1][indice];
    }else{
        return 'Aluno não cadastrado';
    }
}

console.log(exibeNomeNota("Ana"));