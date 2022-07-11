class Pessoa {
    constructor(nome, sobrenome, cpf, email){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
    }

    exibirNomeCompleto(){
        console.log(` ${this.nome} ${this.sobrenome}`)
    }
}

class Programador extends Pessoa{
    constructor(nome, sobrenome, cpf, email, linguagem){
        super(nome, sobrenome, cpf, email)
        this.linguagem = linguagem
    }
}

const novoDev = new Programador("Andre", "Silva", "0987654312", "andre@email.com", "JavaScript")

console.log(novoDev)