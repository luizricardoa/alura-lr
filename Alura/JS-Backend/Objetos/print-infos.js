const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"1234567890",
    email:"andre@email.com"
}

console.log(`Meu nome eh ${cliente.nome} e tenho ${cliente.idade} anos.`);
console.log(`Os tres primeiros numeros do meu CPF sao: ${cliente.cpf.substring(0,3)}.`);