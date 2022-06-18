// parametros de funcao

function soma(numeroUm, numeroDois) {
    return numeroUm + numeroDois;
}

// console.log(soma(2, 2));
// console.log(soma(6818, 681));
// console.log(soma(10, 10));

// parametros x argumentos

//ordem dos parametros

function nomeIdade(nome, idade){
    return `meu nome eh ${nome} e minha idade eh ${idade}`;
}

// console.log(nomeIdade("Camila", 25));
// console.log(nomeIdade("Luiz", 26));

function multiplica(numeroUm = 1, numeroDois = 2) {
    return numeroUm * numeroDois;
}

console.log(multiplica(soma(4, 5)));