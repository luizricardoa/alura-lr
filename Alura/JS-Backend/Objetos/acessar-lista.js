const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"1234567890",
    email:"andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

//colchetes
//console.log(cliente["nome"])