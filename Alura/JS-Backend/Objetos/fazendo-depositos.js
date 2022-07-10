//const depositar = ({valor, cliente}) => cliente.saldo += valor

const cliente = {
    nome:`Andre`,
    idade:36,
    cpf:`1234567890`,
    email:`andre@email.com`,
    telefones: [`55946384532`, `55987654321`],
    dependentes: [
        {
            nome:`Sara Silva`,
            parentesco: `filha`,
            dataNasc:`20/03/2011`},
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }
    ],
    saldo:100,

    depositar: function(valor)
    {
        this.saldo += valor
    }
    // depositar:function(valor)
    // {
    //     depositar({cliente:this, valor})
    // }
}

console.log(cliente.saldo)
cliente.depositar(30)
//depositar({cliente, valor:30})
//cliente.depositar(30)             

console.log(cliente.saldo)