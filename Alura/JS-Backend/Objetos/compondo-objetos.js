const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"1234567890",
    email:"andre@email.com",
    telefones: ["55946384532", "55987654321"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)