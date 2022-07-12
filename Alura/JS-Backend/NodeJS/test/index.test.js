const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: `https://developer.mozilla.org/pt-BR/docs/Web/API/FileList`
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma funcao', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('./test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('deve retornar mensagem "nao ha links"', async () => {
        const resultado = await pegaArquivo('./test/arquivos/texto1_semlinks.md')
        expect(resultado).toBe('nao ha links');
    })
})
