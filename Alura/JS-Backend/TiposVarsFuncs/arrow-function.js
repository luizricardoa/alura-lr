function apresentar(nome) {
    return `meu nome eh ${nome}`;
}

// Arrow function
const apresentarArrow = nome => `meu nome eh ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com mais de uma linha de instrucao

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow function se comporta como expressao

// arrow eh um jeito rapido e curto
// declaracao de funcao, mais facil de compreender