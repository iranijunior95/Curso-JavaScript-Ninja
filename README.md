# Curso JavaScript Ninja

Anotações e acompanhamento de estudos do curso "JavaScript Ninja".


## [ Aula 01 ]

### - Variáveis e tipos de dados

Tipos de Variaveis:

- var
- let
- const

Tipos de Dados:

- string ( Recebe um valor de texto dentro de ' ' ou " " ou `` );
- number ( Recebe um valor numerico );
- boolean ( Recebe um valor booleando "Verdadeiro" ou "Falso" );
- null ( Representa um valor vazio );
- undefined ( Representa um valor vazio ou inexistente );
- object ( Recebe um objeto JavaScript );
- array ( Recebe uma lista de valores );

---

### - Operadores aritimeticos

Tipos de operadores:

- "+" Adição
- "-" Subtração
- "*" Multiplicação
- "/" Divisão

Tipos de operadores abreviados:

- "++" Soma do valor + 1... Pode ser feito Pós incremento ou Pré decremento
- "--" Subitrai do valor - 1... Pode ser feito Pós incremento ou Pré decremento

- "+=" Soma uma valor e o atribui
- "-=" Diminui um valor e o atribui
- "*=" Multiplica um valor e o atribui
- "/=" Divide um valor e o atribui

---

### - Operadores de igualdade / relacionais

Operadores de igualdade:

- "==" Verifica se um valor é igual a outro e retorna um valor booleano
- "!=" Verifica se um valor é diferente de outro e retorna um valor booleano
- "===" Verifica se um valor e se o tipo é igual a  outro e retorna um valor booleano
- "!==" Verifica se um valor e se o tipo é diferente de outro e retorna um valor boolano

Operadores relacionais:

- ">" Verifica se um valor é maior que outro e retorna um valor booleano
- "<" Verifica se um valor é menor que outro e retorna um valor booleano
- ">=" Verifica se um valor é maior ou igual a outro e retorna um valor booleano
- "<=" Verifica se um valor é menor ou igual a outro e retorna um valor booleano

---

### - Funções

- Funções são basicamente blocos de codigos nomeados que podem ser reutilizados e invocados usando o operador "()";
- Funções criam escopos, ou seja, uma variavel for criada dentro de uma função ela não pode ser acessada fora dessa função;
- Funções retornam valores;

Exemplo:

```
var numero = 1;

function soma() {
    return numero +1;
}

soma()

```

- Funções podem receber argumentos ou parametros;

Exemplo:

```
function soma(numero1, numero2) {
    return numero1 + numero2;
}

soma()

```

## [ Aula 02 ]

### - Operadores logicos

- "&& (AND)" Combina duas condições e retorna um valor booleano se agradar a condição
- "|| (OR)" Verifica se um ou outro valor agrada a condição e retorna um booleano
- "! (NOT)" Inverte a condição e retorna um valor booleano

---

### - Operadores unarios

- "+" Força um valor a se tornar um numero, concatena Strings
- "-" Força um valor a ser convertido em numero e inverte o simbolo

---

### - Estrutura léxica

É um conjunto de regras que vão definir como a semantica da linguagem funciona.

Exemplo: Como definir variaveis, como definir funções, como organizar comentarios e etc...

- "Case Sensitive" Diferencia letras maiusculas de  letras minusculas
- "Comentarios":

```
// Comentarios de Linhas

/*
Comentarios de bloco
*/

```
- "Literal" São valores fixos da linguagem, valores que não mudam, Ex: TRUE vai ser sempre TRUE
- "Identificadores" São utilizados para criar nomes de variaveis e funcções

Exemplo:

Podem iniciar com:

-  "_" ou "$"
- letras de "a" a "z"
- letras de "A" a "Z"

Podem conter: 

-  "_" ou "$"
- letras de "a" a "z"
- letras de "A" a "Z"
- numero de "0" a "9"
- qualquer caracter Unicode

- "Palavras Reservadas" São um conjunto de palavras proprias da longuagem javascript que não podem ser utilizadas para as nomeações de variavies e funcções... Ex: void, main, var, let, function e etc...

---

### - Intruções condicionais

- "IF" Verifica uma condição se ela corresponder ao exigido executa um trecho de codigo

Exemplo:

```
var numero = 1;

if(numero === 1) {

    console.log("Esse numero é igual a um");
}

```

- "ELSE" Verifica se a condição do if não for aceita executa o else

Exemplo:

```
var numero = 2;

if(numero === 1) {
    console.log('Esse numero é igual a um');
}else {

    console.log('Esse numero não é igual a um');
}

```

- "ELSE IF" Verifica se a condição não se encaixar na IF cria outra condição

Exemplo:

```
var numero = 2;

if(numero === 3) {

    console.log('Numero igual a 3');

}else if(numero === 2) {
    
    console.log('Numero igual a 2');

}else {
    
    console.log('Numero igual a 1');
}

```

## [ Aula 03 ]

### - Tipos

- Tipos primitivos

Number, 
String, 
Boolean, 
Null, 
Undefined

- Tipos de objetos

Todos os tipos que não se encaixem dentro de tipos primitivos são considerados tipos de objeto, ex: objeto, array, funções.

### - Objeto

- São um conjunto de propriedades que recebem nome e valor, esses valores podem ser tipo primitivos ou outros objetos.
- Quando uma função é atribuida a uma propriedade de objeto ela é chamada de metodo.


## [ Aula 04 ]

### - Truthy e Falsy

- Valores avaliados como False são considerados Falsy . Valores avaliados como True são considerados Truthy

 - Exemplo Falsy:

 undefined,  
 null,  
 NaN,   
 0,  
 "-0",  
 '',  
 "",  
 false

 - Exemplo Truthy:

 Todos os outros valores que nãos e encaixam em Falsy.

 - Uma forma de identificar se um valor valor é Truthy ou Falsy é fazendo usso do operador "!!"

 Exemplo:

 ```
 !!0

 false

 ```

### - Condicional Ternario

- Basicamente é uma forma de substituir o if em chegagem de condições mais simples

```
condição ? true : false;

```

### - Escopo de variaveis 

- Global: Escopo onde todo o codigo consegue acessar a variavel

- Local: Escopo é definido localmente, como exemplo uma função que criar um escopo local, toda variavel criada dentro da função só podera ser cessada dentro dela.

- Sempre usar palavras reservadas "var, let, const" para criar variaveis, isso evita problemas com escopo.

- Argumentos de funções são sempre de escopo local.


## [ Aula 05 ]

### - Retorno de funções

- Em javascript as funções podem retornar muito mais dq tipos primitivos, podendo retornar arrays, objetos;

### - Parametros de funções

- Assim como o retorno os parametros das funções tambem podem receber arrays e objetos;


## [ Aula 06 ]

### - Switch Case

 - Uma estrutura condicional asim como if e else

 ### - Estruturas de repetições While

 - Recebe uma condição, enquanto a mesma for verdadeira a estrução dentro do while vai ficar sendo repetida


## [ Aula 07 ]

### - Operador de modulo

- Retorna o resto de uma divisão %

### - Arrays continuação

- Length - conta a quantidade de itens qu exitem em um array
- Push - adiciona um item no final do array

### - For

- Uma estrutura de repetição: (inicial, condição, final da expressão);


## [ Aula 08 ]

- Nomes de funções, necessario definir funções com nomes no lugar de funções anonimas...
- Melhora no debug, da acesso ao metodo name do objeto função...

### - Programação funcional

- Nada mais é que uma forma de se programar e escrever projetos baseados em funções ou nas caracteristicas que as funções tem.

- linguagem funcional permite que uma função retorne outra função;


## [ Aula 09 ]

### - Escopo de funções

- Funções criadas dentro de outras funções não são de escopo global, podendo ser acessadas apenas localmente dentro da função pai

testando git