function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    Cliente. call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const juliana = new ClientePoupanca("Juliana", "0987654321", "ju@email.com", 100, 200)

console.log(juliana)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

juliana.depositarPoup(30)

console.log(juliana.saldoPoup)