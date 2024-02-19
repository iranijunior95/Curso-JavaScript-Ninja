(function() {
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
var person = {
    name: 'Irani',
    lastname: 'Junior',
    age: 28
};

console.log( 'Propriedades de "person": ' +Object.keys(person));

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?

/*
Crie um array vazio chamado `books`.
*/
// ?

var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?

books.push({
    name: 'livro1',
    pages: 100
});

books.push({
    name: 'livro2',
    pages: 200
});

books.push({
    name: 'livro3',
    pages: 300
});

console.log( '\nLista de livros: ' +books);

/*
Mostre no console todos os livros.
*/
// ?
var livroRemovido = books.pop();
console.log( '\nLivro que está sendo removido:' +livroRemovido.name);
/*
Remova o último livro, e mostre-o no console.
*/
// ?

console.log( '\nAgora sobraram somente os livros:' +books);
/*
Mostre no console os livros restantes.
*/
// ?

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
books = JSON.stringify(books);
console.log( '\nLivros em formato string:' +books);

/*
Mostre os livros nesse formato no console:
*/
// ?

/*
Converta os livros novamente para objeto.
*/
// ?
books = JSON.parse(books);
console.log( '\nAgora os livros são objetos novamente: '+books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

for (var index=0; index < books.length; index++) {
    console.log('"'+Object.keys(books[index])[0]+':' +books[index].name+'"');
    console.log('"'+Object.keys(books[index])[1]+':' +books[index].pages+'"');
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?

var myName = ['i', 'r', 'a', 'n', 'i'];

console.log( '\nMeu nome é:' +myName.join(' '));

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:' +myName.reverse().join(' '));

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:' +myName.sort());
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?

}());