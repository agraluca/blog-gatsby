---
title: Básico ao Avançado S01E06
description: Curso básico ao avançado S01E05
date: 2020-09-23 10:35:22
image: ../assets/img/fetch.png
category: JS
background: "#8A1919"
---
# Olá!

Iai pessoal, tudo bem com vocês? Hoje trouxe uma funcionalidade muito importante no JavaScript - o fetch. 
O fetch é um método global utilizado para se comunicar com API's. Basicamente é uma forma do cliente se comunicar com o servidor. 

> A sigla API corresponde às palavras em inglês “Application Programming Interface“. No português “Interface de Programação de Aplicações”. Elas são uma forma de integrar sistemas.

Segue vídeo do assunto:

<iframe width="560" height="315" src="https://www.youtube.com/embed/VS2NdfWOuAs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Novidade I:

No post de hoje construímos um site já existente, ou melhor dizendo, recriamos. Aproveitei para mostrar como utilizar o fetch para buscar os dados de uma API existente, chamada [Lorem Picsum](https://picsum.photos/) (trocadilho genial hehe). Ela basicamente fornece fotos de um banco de dados extenso. Pelo que notei ele busca essas fotos do [Unsplash](https://unsplash.com/) - uma rede social incrível onde o objetivo é somente mostrar as fotos tiradas.

Referência: [MDN Web Docs Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch), [DevMedia Fetch](https://www.devmedia.com.br/javascript-fetch/41206)

## Novidade II:

Finalmente botamos a mão na massa com todo o conteúdo que aprendemos aqui no blog! Saímos do bom e velho CodePen para utilizar um arquivo só nosso, conectado com o HTML e CSS.
Para isso queria só pontuar o como fizemos:
No nosso HTML criamos uma tag script abaixo do nosso body:

<script src="main.js"></script> 

(lembrando que dentro das aspas vai o caminho de onde está o seu arquivo .js, nesse caso ele estava na raiz, junto com os outros arquivos)

> Caso o código do script fique pequeno, pode ser criado o código dentro das tags script, sem necessidade de usar o src: <script> seu código </script>

## Novidade III:

Ouvimos falar sobre JSON no vídeo, mas não aprofundo a respeito. Não por que não é importante, muito pelo contrário, mas sim por que a video aula ficaria imensa... Mas como sempre irei deixar bastante referência a respeito.
Mas resumidamente, o JSON (JavaScript Object Notation - Notação de Objetos JavaScript) é uma formatação de fácil entendimento para humanos e para máquinas. O JSON tem um formato de objeto e nele podemos passar/receber informações de forma mais fácil. O legal do JSON é que ele é universal, a maioria das linguagens modernas e não modernas entendem a sua escrita.
Na aula vemos o JSON sendo passado da API que utilizamos para o nosso JavaScript, tornando possível colocar em tela as nossas imagens.

Referência: [JSON](https://www.json.org/json-pt.html), [JSON DevMedia](https://www.devmedia.com.br/json-tutorial/25275)

## Novidade IV:

Utilizamos o método .map() para percorrer o array de objetos que recebemos da API. O que ele fez foi basicamente percorrer o array desde a posição zero até sua ultima posição, retornando assim o que precisávamos - as imagens para serem printadas em tela. Basicamente precisamos da resposta da api, recebemos ela como parâmetro da função e então efetuamos o map. Dentro do map devemos efetuar a função que será efetuada a cada passada no array. E para isso utilizamos a arrow function, que é uma forma mais moderna e simplificada de escrever uma função: (parametro)=>{} 

Dessa forma evitamos escrever mais código. Com isso ficamos com algo do tipo:

```javascript
parametroRecebido.map( (parametro)=>{
  return parametro.propriedadeDoObjetoDesejada
} )
```

Então só para ficar mais claro. O map irá passar sobre o array da API que em suma é um array de objetos. Na sua primeira passada ele irá efetuar a função que você criar na primeira posição array\[0]. Após acabar essa interação - seja ela qual for, mas no nosso caso é de receber o valor de uma url, criar a tag <img class="" width="" height="" src=""> e popular o src="" com o valor recebido - ele irá efetuar isso de novo no array\[1]. Então após ele rodar por todas as posições do array ele irá parar.  

Parece complicado, mas assim que fizerem e utilizarem, ficará mais claro o seu funcionamento.

Referência: [MDN Web Docs map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [DevMedia map](https://www.devmedia.com.br/javascript-map-mapeando-elementos-de-um-array/40648), [W3Schools map](https://www.w3schools.com/jsref/jsref_map.asp)

## Novidade V:

Vimos no finalzinho do vídeo o método join(), que basicamente junta todos os elementos de um array, e retorna ele em uma string, separando estes itens por algum caractere do seu gosto. No caso, por padrão estavamos recebendo as imagens separadas por virgulas. Para resolver isso bastou concatenar esse método .join("") ao final do nosso map(). Passando o .join("") sem nada dentro, fez o trabalho de retirar as virgulas para nós. Caso queiram algo pra separar, basta escrever dentro das aspas o que quiserem.
Referência: [MDN Web Docs join](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join), [W3Schools join](https://www.w3schools.com/jsref/jsref_join.asp)