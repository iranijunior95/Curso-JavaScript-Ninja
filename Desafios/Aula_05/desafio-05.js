/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

var meuArray = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

function retornaMeuArray(array) {

    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?

console.log(retornaMeuArray(meuArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

function minhaFuncao01(arrayDeValores, numero) {

    return arrayDeValores[numero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

var meuArray02 = ['1', 2, true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
    console.log(minhaFuncao01(meuArray02, 0));
    console.log(minhaFuncao01(meuArray02, 1));
    console.log(minhaFuncao01(meuArray02, 2));
    console.log(minhaFuncao01(meuArray02, 3));
    console.log(minhaFuncao01(meuArray02, 4));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function book(nomeDoLivro) {

    var dadosLivros = {
        'It a Coisa': {
            quantidadePaginas: 300,
            autor: 'Stephen King',
            editora: 'Editora Arqueiro'
        },

        'It a Coisa 1': {
            quantidadePaginas: 200,
            autor: 'Stephen King 1',
            editora: 'Editora Arqueiro 1'
        },

        'It a Coisa 2': {
            quantidadePaginas: 100,
            autor: 'Stephen King 2',
            editora: 'Editora Arqueiro 2'
        },
    };

    if(nomeDoLivro === undefined) {

        return dadosLivros;
    }

    return dadosLivros[nomeDoLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

console.log(`O livro It a Coisa 2 tem ${book('It a Coisa 2').quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

console.log(`O autor do livro It a Coisa 2 é ${book('It a Coisa 2').autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

console.log(`O livro It a Coisa 2 foi publicado pela editora ${book('It a Coisa 2').editora}.`);