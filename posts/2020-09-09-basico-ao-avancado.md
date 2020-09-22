---
title: Básico ao Avançado S01E01
description: Curso básico ao avançado S01E01
date: 2020-09-09 03:57:06
image: ../assets/img/love2learn.jpg
category: HTML
background: "#912B12"
---
## Hoje começaremos...

![Parede com uma arte de um lápis escrito "Amo aprender"](../assets/img/love2learn.jpg)

Bom a verdade é que estou sem ideias para construir o início da nossa aplicação, sendo mais sincero ainda estou escrevendo sem saber qual será a aplicação. Mas, estou dando os primeiros passos - já criei o PowerPoint da primeira aula - e irei explicar a base primeiro.

> Para começar irei passar o arquivo PowerPoint do primeiro modulo. Nele eu falo a respeito de conceitos básicos de HTML, algumas de suas tags e suas propriedades.

<iframe src="https://onedrive.live.com/embed?cid=B3E072143D9FE0F1&amp;resid=B3E072143D9FE0F1%21584&amp;authkey=ABTZQC4qNZmJ9aw&amp;em=2&amp;wdAr=1.7777777777777777" width="962px" height="565px" frameborder="0">Este é um apresentação do <a target="_blank" href="https://office.com">Microsoft Office</a> incorporado, da plataforma <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>

## Como irão notar...

Na apresentação podemos notar que no último slide fiquei de colocar o código aqui:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" type="text/css" href="styles.css" />

    <title>Nome do site</title>
  </head>

  <body>
    <header id="header-content">
      <h3>Logo</h3>
      <ul>
        <a href="index.html" title="Início">
          <li>Home</li>
        </a>
        <a href="#" title="Sobre">
          <li>Sobre</li>
        </a>
      </ul>
    </header>

    <div class="container">
      <section>
        <img
          src="https://lucaagra.netlify.app/assets/img/por-do-sol-fazenda.jpg"
          alt="Imagem do pôr do sol na fazenda"
        />
      </section>
      <aside class="sideMenu">Menu Lateral</aside>
    </div>

    <main>
      <h1>Conteudo principal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorum
        illum aperiam. Consequatur, est quibusdam praesentium libero cumque
        atque labore, maxime culpa repellat deserunt quas cum. Dicta ut ab
        veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
        dolorum illum aperiam. Consequatur, est quibusdam praesentium libero
        cumque atque labore, maxime culpa repellat deserunt quas cum. Dicta ut
        ab veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iste dolorum illum aperiam. Consequatur, est quibusdam praesentium
        libero cumque atque labore, maxime culpa repellat deserunt quas cum.
        Dicta ut ab veritatis.
      </p>
    </main>

    <footer>
      <h2>Todos os direitos reservados &copy;</h2>
      <ul>
        <a href="https://www.facebook.com/luca.agra/">
          <li>Facebook</li>
        </a>
        <a href="https://instagram.com/agraluca">
          <li>Instagram</li>
        </a>
      </ul>
    </footer>
  </body>
</html>
```

## Aqui eu deixo algumas dicas...

Bom, a melhor forma de entender um assunto é pondo a mão na massa. Então recomendo muito que leiam de outras fontes - no slide recomendo o [W3School](https://www.w3schools.com/html/default.asp), mas existem outros. Além disso, que tentem pegar o código e mexam muito nele, testando cada funcionalidade.

Podemos notar que o nosso site ficará **muito** feio, sem nenhum tipo de cor ou organização. Isso ocorre devido a falta do CSS - Cascading Style Sheets ( folha de estilo em cascatas ).

![Imagem de como ficou o nosso site](../assets/img/como_ficou.jpg)

## Parando pra pensar...

Notei que uma boa ideia seria apresentar os assuntos resumidamente, com os slides e complementando aqui com o texto. Para no fim, criar de fato a aplicação em um vídeo editado, passando por cada parte do nosso código, obviamente escrevendo também aqui e adicionando os códigos para conferirem.

## Mas iai?

Deixem aqui nos comentários o que acharam da ideia, estudem sobre isso, mandem perguntas aqui ou em alguma rede social minha pois na próxima postagem iremos aprender o básico do CSS, criando uma mini página para mostrarem ao mundo! Espero que tenham gostado =)