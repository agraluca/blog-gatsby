---
title: Básico ao Avançado S01E03
description: Curso básico ao avançado S01E03
date: 2020-09-14 04:44:08
image: ../assets/img/js.png
category: JS
background: "#8A1919"
---
# Hoje falaremos de JavaScript...

![JavaScript](../assets/img/js.png)

Bom, a abordagem que utilizarei será primeiramente abstrata. Mostrarei alguns tópicos e depois juntarei tudo. Diferentemente do HTML e do CSS essa parte do JS será mais longa, dividirei em algumas partes, não sei em quantas ainda. 

## Para começar...

Mas então Luca, o que é JavaScript?

JavaScript é uma linguagem de programação que é utilizada para se criar scripts de forma dinâmica. Usualmente é utilizado para o desenvolvimento web, mas também pode ser utilizado em outras áreas, como no desenvolvimento mobile, banco de dados e afins....

Tudo aquilo que vemos num site que de alguma forma necessite de alguma atualização dinâmica provavelmente tem um dedo do javascript. Sejam mapas, imagens animadas (por exemplo os famosos parallax ), interações com o usuário, buscar informações de API's, entre outras coisas.

## Qual a melhor forma de aprender essa linguagem de programação?

Eu diria primeiramente para terem calma. Não se assustem com isso, JavaScript é nada mais nada menos que uma linguagem, como inglês, francês, português... Se sua mentalidade for de olhar o JS como uma linguagem invés de um bicho de sete cabeças, naturalmente o conhecimento ira surgir - obviamente, com dedicação.

Então eu diria que seguindo um plano e colocando o aprendizado em prática! Testem tudo que eu falar aqui e leiam as referências que eu passar =)

## As variáveis:

Façam o seguinte, abram uma nova guia do seu navegador e abram o Google. Em qualquer parte do Google cliquem com o botão direito e cliquem em inspecionar. Em seguida cliquem em "console". Nele iremos escrever:

let meuNome = "Insira seu nome entre aspas" 

Deem enter. Irá aparecer no console: undefined.

Se isso aconteceu, perfeito, estamos no caminho certo!

Bom agora quero que vocês escrevam o seguinte:

"Meu nome é " + meuNome

Dando enter notarão que vocês receberão como resposta a frase "Meu nome é Fulano".

Isso ocorre por que demos um valor que continha o seu nome para uma variável. Variáveis são a base de uma linguagem de programação, pois posteriormente podemos buscar valores que precisamos que estão alocados nela.

## As funções:

No dia a dia de um programador muitas linhas de códigos são escritas. Vou fazer uma referência paralela a algo que vocês são mais familiarizados:

Imagina que pegam um livro pra ler, um livro sobre algum assunto difícil. Agora imagina que a pessoa que escreveu o livro escreve TUDO em apenas um capítulo... Seria uma verdadeira bagunça, super difícil de se digerir. Definitivamente não seria um bestseller. Agora imagina só que loucura um código não ficaria se toda aquela informação fosse feita num bloco de código.

Felizmente nós temos as funções! Com elas podemos escrever várias linhas dentro de um bloco que pode ser acessado em qualquer parte do nosso código.

Existem diversas funções pré-existentes no JS. Se eu fosse citar e explicar todas levaríamos um tempo monstruoso, então irei passar uma referência e dependendo do seu interesse, basta ler sobre ela. Porém já adianto que com a prática e a necessidade vocês irão aprender as mais importantes. E também existem as funções que podemos criar, que basicamente torna nossas possibilidades infinitas!

Para criarmos um função basta escrevermo:

function nomeDaMinhaFuncao() {códigos que iremos escrever}

Como primeiro exemplo irei mostrar uma função em que damos um valor inteiro positivo qualquer e recebemos como resposta se ele é impar ou par.

```javascript
function parOuImpar(x) {
  let resto = x%2
  if(resto == 1) {
    alert(x + " é um número é impar")
  } else {
    alert(x + " é um número é par")
  }
}
parOuImpar(4) // Aqui dentro dos parenteses colocamos o valor que precisamos
```

Agora iremos entrar nesse link: [CodePen](https://codepen.io/pen/) e iremos tentar ver em funcionamento nossa função.

Podemos notar algumas coisas que ainda não conhecemos:

### A chamada:

Notem no final do código, na linha 9, que chamamos a função, para ela funcionar basta que escrevamos o nome dela com a abertura e fechamento de parênteses: 

nomeDaFuncao()

Bom no nosso caso, dentro do parênteses eu passei um valor, para descobrirmos se ele é par ou impar - que é o objetivo da nossa função. Para nossa função receber esse valor que inserimos é necessário especificar na função que ela irá receber algo. Nesse caso: function parOuImpar(x) { }. 

Poderíamos escrever qualquer coisa: x,y,z...numero...batata, elefante... Enfim, vocês entenderam, mas recomenda-se que coloquemos algo que faça sentido, por isso escolhi x.

### Funções existente:

Como eu mencionei anteriormente o JS tem um número muito grande de funções existentes. Nesse caso eu utilizo o alert()

Ele basicamente é um pop up irritante que aparece na tela dizendo alguma informação. Dentro dele podemos passar textos, variáveis e até outras funções. No nosso caso eu passei o  valor recebido x e concatenei (+) a um texto (mais conhecido como string):

 alert(x + " é um número é impar") e alert(x + " é um número é par")

Dai receberemos algo como: "4 é um número par" ou "3 é um número impar"... e por ai vai.

Notem que a variável x não precisa de aspas, já os textos, precisam.

No CodePen ele atualiza os resultados a cada mudança de tecla em um curto período de tempo, então se quiserem mudar de alert() para console.log() para invés de receber um pop up irritante receber o valor no console basta trocar para:

 console.log(x + " é um número é impar") e console.log(x + " é um número é par")

Assim é sé abrir o console apertando f12 e indo na aba console. Ou então apertando com botão direito e ir em inspecionar e abrir o console. Desse jeito iremos ver o resultado lá.

### If, else:

If else é uma estrutura condicional, que basicamente checamos se um resultado é verdadeiro. Caso ele seja fazemos uma ação, caso não seja, fazemos outra.

Referência:[ If...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

No nossa caso nomeamos um variável de resto

> Sabe quando fazemos um divisão de um número natural? Se dividirmos um número por outro que não seja de alguma forma múltiplo dele iremos ter um resto. Nesse caso não estamos considerando a divisão de números racionais.

A ideia é a seguinte. Para sabermos se um número é par ou impar basta dividirmos ele por 2, se o resto for zero ele é par, se o resto for um ele é impar. No JS e em milhares de outras linguagens de programação o sinal de % é o responsável por te dar o resto de alguma divisão. Dai atribuímos esse resultado do nosso valor recebido na função (no nosso caso o x) na variável resto: 

let resto = x%2 

Então efetuamos o if, else. 

Se resto for igual a 1 faça: alert(x + " é um número é impar")

Se o resultado for qualquer outro diferente de 1 faça:  alert(x + " é um número é par")

## Por fim...

Deixarei mais um exemplo de código para brincarem e entenderem como funciona o básico das funções:

```javascript
function nomeGrande(meuNome) {
  let numDeLetras = meuNome.length
  if(numDeLetras >= 8) {
    console.log( meuNome + ", seu nome é grande. Ele possui " + numDeLetras + " letras.")
  } else if(numDeLetras >= 5 && numDeLetras < 8) {
     console.log(meuNome + ", seu nome tem um tamanho normal. Ele possui "  + numDeLetras + " letras.")
  } else {
    console.log( meuNome + ", seu nome é pequeno. Ele possui " + numDeLetras + " letras.")
  }
}

nomeGrande("Luca")
```

Nesse caso, checamos se um nome é grande ou não. Eu estipulei que um nome é pequeno quando é menor ou igual a 4 letras (está implícito no else). Médio quando esta entre 5 e 7 letras (implícito no else if). E grande quando é maior ou igual a 8 letras (implícito no if).

Como eu sei que irão perguntar o que é length já deixarei aqui a referência: [Length](https://www.devmedia.com.br/javascript-length-como-e-quando-utilizar-essa-propriedade/39233).

## Mais referências

[Devmedia](https://www.devmedia.com.br/javascript/)

[MDN Web Docs](https://wiki.developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/O_que_e_JavaScript)

[W3School](https://www.w3schools.com/js/)

## Isso é tudo pessoal...

![Isso é tudo pessoal!](../assets/img/thatsallfolks.jpg)

Espero que tenham gostado do que aprenderam hoje! Nas próximas aulas aprenderemos sobre estruturas de repetição, arrays, objetos e muito mais! Revisem bastante e leiam todas as referências! Forte abraço!