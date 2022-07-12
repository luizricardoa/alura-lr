const livros = require(`./lista-livros`);

let maisBarato = 0;
let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    }
}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o titulo eh ${livros[maisBarato].titulo}`)

for (let atual = 0; atual < livros.length; atual++){
    if (livros[atual].preco > livros[maisCaro].preco){
        maisCaro = atual
    }
}

console.log(`o livros mais caro custa ${livros[maisCaro].preco} e o seu titulo eh ${livros[maisCaro].titulo}`)