const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];

//includes = booleano = true ou false
//indexOf = numero do indice solicitado, no exemplo = 3


let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeENota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + `, sua media eh ` + listaDeNotasEAlunos[1][indice];
    } else {
        return "Aluno nao esta cadastrado";
    }
}

console.log(exibeNomeENota("Ana"));