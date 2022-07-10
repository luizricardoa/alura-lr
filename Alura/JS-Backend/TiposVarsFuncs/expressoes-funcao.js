// declaracao de funcao

function minhaFuncao(param) {
//     // bloco de codigo
}

//minhaFuncao("param");

// expressao de funcao

//const soma = function(num1, num2) {return num1+ num2}
//console.log(soma(1, 1));

//diferenca principal: HOISTING
//funcoes e var sao "listadas" no topo

console.log(apresentar());

function apresentar() {
    return "ola";
}

console.log(soma(1, 1));
const soma = function(num1, num2) {return num1+ num2}
