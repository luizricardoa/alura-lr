const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];

//includes = booleano = true ou false
//indexOf = numero do indice solicitado, no exemplo = 3


let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

// const exibeNomeENota = (nomeDoAluno) => {
//     if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
//         let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
//         return listaDeNotasEAlunos[0][indice] + `, sua media eh ` + listaDeNotasEAlunos[1][indice];
//     } else {
//         return "Aluno nao esta cadastrado";
//     }
// }

// console.log(exibeNomeENota("Ana"));

// const exibeNomeENota = (nomeDoAluno) => {
//     let [alunos, mediasDosAlunos] = listaDeNotasEAlunos;
//     if (alunos.includes(nomeDoAluno)){
//         let indice = alunos.indexOf(nomeDoAluno);
//         return alunos[indice] + `, sua media eh ` + mediasDosAlunos[indice];
//     } else {
//         return "Aluno nao esta cadastrado";
//     }
// }

// const exibeNomeENota = nomeDoAluno => {
//     let [alunos, mediasDosAlunos] = listaDeNotasEAlunos;
//     let index = alunos.indexOf(nomeDoAluno);
//     return index < 0
//         // operador ternario = "?" e ":"
//         ? "Aluno nao esta cadastrado"
//         : nomeDoAluno + `, sua media eh ` + mediasDosAlunos[index];
// }

// // const alunoEncontrado = index < 0 ? false : true 
// // return alunoEncontrado  ? alunos[index] + `, sua media eh ` + mediasDosAlunos[index] : "Aluno nao esta cadastrado";

// console.log(exibeNomeENota("Juliana"))

// const exibeNomeENota = nomeDoAluno => {
//     let [alunos, mediasDosAlunos] = listaDeNotasEAlunos;
//     return alunos.indexOf(nomeDoAluno) < 0
//         ? "Aluno nao esta cadastrado"
//         : nomeDoAluno + `, sua media eh ` + mediasDosAlunos[alunos.indexOf(nomeDoAluno)];
// };

// const exibeNomeENota = nomeDoAluno => 
//     alunos.indexOf(nomeDoAluno) < 0
//         ? "Aluno nao esta cadastrado"
//         : nomeDoAluno + `, sua media eh ` + mediasDosAlunos[alunos.indexOf(nomeDoAluno)];

// console.log(exibeNomeENota("Ana"))
// console.log(exibeNomeENota("Shaka"))

const exibeNomeENota = nomeDoAluno => 
    alunos.indexOf(nomeDoAluno) < 0
        ? "Aluno nao esta cadastrado"
        : `${nomeDoAluno}, sua media eh ${mediasDosAlunos[alunos.indexOf(nomeDoAluno)]}`;

console.log(exibeNomeENota("Ana"))
console.log(exibeNomeENota("Shaka"))