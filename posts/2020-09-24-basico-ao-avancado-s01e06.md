---
title: Básico ao Avançado S01E06
description: Curso básico ao avançado S01E06
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

<iframe width="933" height="525" src="https://www.youtube.com/embed/VS2NdfWOuAs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Novidade I:

No post de hoje construímos um site já existente, ou melhor dizendo, recriamos. Aproveitei para mostrar como utilizar o fetch para buscar os dados de uma API existente, chamada [Lorem Picsum](https://picsum.photos/) (trocadilho genial hehe). Ela basicamente fornece fotos de um banco de dados extenso. Pelo que notei ele busca essas fotos do [Unsplash](https://unsplash.com/) - uma rede social incrível onde o objetivo é somente mostrar as fotos tiradas.

O fetch é um método com algumas regras importantes. Primeiro temos que entender que o compilador do JS funciona de forma linear, ele sai compilando tudo desde a linha 1 até o final do seu código. Desse jeito, ele acaba lendo tudo de forma muito rápido, sem esperar em uma linha por muito tempo. Como precisamos esperar que a API se comunique conosco, precisamos fazer que o JS espere nas linhas em que se é necessário aguardar a resposta. Para contornar isso utilizamos funções assíncronas. Para fazer isso é muito simples: 

Basta que quando formos criar um função coloquemos um async antes do function e um await sempre que precisarmos esperar algo. Por exemplo:

```javascript
async function getItemsFromApi() {
  const response = await fetch("...urlDaApi")
  const data = await response.json()
  console.log(data)
}

getItemsFromApi()
```

Desse jeito esperamos duas vezes: Uma para a API enviar seus dados e outra para esperar esse recebimento, para então transformar tudo em JSON.

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

## Novidade VI

Utilizamos algumas coisas diferentes no HTML: 

* [Google Fonts](https://fonts.google.com/)
* [Font Awsome](https://fontawesome.com/)

Caso haja alguma dúvida sobre o funcionamento, podem mandar! Não entrarei no assunto para não estender de mais.

## Então é isso...

Espero que tenham gostado! Tem bastante conteúdo massa pra absorver nesse post. Colocando ele em prática será possível fazer o que quiserem! A imaginação de vocês será seu único limitador... Podemos usar API's prontas e open source de diversos lugares. Desde imagens até sites como o do Netflix. Forte abraço!
Site com diversas API's públicas: [GitHub Public API'S](https://github.com/public-apis/public-apis). 

**Vale ressaltar que fiz uma cópia do site**: [Chris Stayte](https://www.chrisstayte.com/)

Todos os créditos da montagem, desde a escolha da formatação até o design, do site vai para esse rapaz. O conteúdo publicado teve única e exclusivamente o objetivo de ensinar! Apenas usei meu conhecimento para refazer o site. Aproveitem e confiram o trabalho dele. Notei que ele nunca mais postou nada, mas tinha um conteúdo muito bom! 

## Por fim...

Irei colocar o código de tudo, como de costume:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aprendendo fetch</title>

    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap"
      rel="stylesheet"
    />
    <!-- Fontawesome CSS -->

    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
      integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <header>
      <div class="logo">luca agra</div>
      <div class="location">Salvador, Bahia</div>
      <nav>
        <ul class="top-header">
          <li>
            <a href="#"> home</a>
          </li>
          <li>
            <a href="#"> sobre</a>
          </li>
          <li>
            <a href="#"> youtube</a>
          </li>
          <li>
            <a href="#"> fotos</a>
          </li>
          <li>
            <a href="#"> blog</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section class="introduction">
        <h1>Olá! Eu me chamo Luca Agra.</h1>
        <p>
          Eu sou um desenvolvedor front-end que gosta de criar contéudos
          bonitos. Eu adoro ajudar as pessoas! Se quiser aprender mais coisas,
          sigam o nosso blog!
        </p>
        <p class="center">
          Eu também adoro apreciar boas fotos, por isso mostrarei algumas fotos
          interessantes!
        </p>
        <div class="photo-title">Aqui estão algumas fotos</div>
        <div id="photos"></div>
      </section>
    </main>
    <footer class="social-media">
      <ul>
        <li>
          <a href="">
            <i class="fab fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  </body>
  <script src="main.js"></script>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: monospace;
  padding: 0 15rem;
}

header {
  margin: 1.75rem 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo {
  font-family: Poppins;
  font-size: 2rem;
  text-transform: uppercase;
  color: #000;
}

.location {
  font-family: Roboto;
  font-size: 0.6rem;
  color: #aaa;
}

.top-header {
  display: flex;
  padding: 1rem;
}

.top-header li {
  padding: 0 1.5rem;
  list-style: none;
}

.top-header li a {
  text-decoration: none;
  color: #9c9c9c;
  font-size: 1rem;
}

.top-header li a:hover {
  color: #3b3b3b;
}

main {
  padding: 4rem;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.introduction h1 {
  font-family: Roboto;
  font-size: 1.4rem;
  letter-spacing: 0.08rem;
  margin-bottom: 0.5rem;
}

.introduction p {
  font-size: 1rem;
  color: #9c9c9c;
  line-height: 30px;
}

.center {
  margin-top: 1rem;
  text-align: center;
}

.photo-title {
  font-family: Roboto;
  margin: 3rem 0 2rem 0;
  font-size: 1.2rem;
}

.photo-space {
  margin: 0.5rem;
  border-radius: 3px;
}

.social-media {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  margin: 5rem 3rem;
}

.social-media ul {
  display: flex;
}

.social-media ul li {
  list-style: none;
  margin-left: 1rem;
  font-size: 1.2rem;
}

.social-media ul li a {
  color: #666;
}

.social-media ul li a:hover {
  color: #3b3b3b;
}
```

```javascript
async function getPhotos() {
  const response = await fetch("https://picsum.photos/v2/list?page=1&limit=16");
  const data = await response.json();
  showPhotos(data);
  console.log(data);
}

getPhotos();

function showPhotos(photos) {
  document.getElementById("photos").innerHTML = `${photos
    .map((photo) => {
      return `<img class="photo-space" width="300" height="200" src="${photo.download_url}">`;
    })
    .join("")}`;
}
```