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





