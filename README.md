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







