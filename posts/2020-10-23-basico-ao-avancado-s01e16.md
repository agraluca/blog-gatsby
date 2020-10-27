---
title: Básico ao Avançado S01E16
description: Curso básico ao avançado S01E16
date: 2020-10-23 02:40:38
image: ../assets/img/react_pt3-1-.jpg
category: JS
background: "#8A1919"
---
# Olá dev!

![capa do curso básico ao avançado, episódio dezesseis: React.JS parte três](../assets/img/react_pt3-1-.jpg)

Tudo bem com vocês? Pois bem, hoje retornaremos a nossa série. Acabei viajando pra fazenda essa semana e não consegui postar lá, sorry =( . Mas hoje daremos continuidade a nossa rede social ZapTalk!! Hoje criaremos o componente dos posts, deixaremos ele no jeito para depois conectarmos nossa API, fazendo assim um recebimento dinâmico das informações. Segue vídeo abaixo:

<iframe title="vídeo da série básico avançado, episódio dezesseis" width="933" height="525" src="https://www.youtube.com/embed/-QeM3Dg8Q98" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Os posts...

Para começar vamos criar um componente dentro da pasta components. Vamos chama-la de Posts e seguir o padrão, criar um arquivo index.js e um arquivo styles.css.
Dentro do index.js vamos criar nossa estrutura funcional básica:

```javascript
import React from "react";
import "./styles.css";

function Posts() {
  return (
  
  );
}

export default Posts;
```

E vamos na pasta pages dentro da pasta Main, vamos importar os Posts e chama-lo devidamente.

```javascript
import React from "react";
import Header from "../components/Header/index";
import Posts from "../components/Posts/index";


function Main() {
  return (
    <div>
      <Header />
      <Posts />
    </div>
  );
}

export default Main;
```

> Notem que no JSX precisamos de uma tag pai envolvendo os componentes - caso haja mais de um. Nesse caso como temos dois componentes precisamos da "div" envolvendo eles.

Agora voltando para o componente dos Posts vamos copiar a estrutura deles, lembrando de fazer os devidos imports dos ícones escolhidos:

```javascript
import React from "react";
import "./styles.css";
import { FiX } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";

function Header() {
  return (
    <section>
      <main>
        <header id="header-post">
          <div className="profile-image">
            <img
              src="https://oladev.com.br/assets/img/logoOg.png"
              alt="Imagem do perfil"
            />
            <h5>Agraluca</h5>
          </div>
          <FiX />
        </header>
        <img
          src="https://images.unsplash.com/photo-1602768240138-ab4ec5a0af8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="Foto da postagem"
        />

        <section id="post-icons">
          <ul>
            <li>
              <a href="/">
                <FiHeart />
              </a>
            </li>
            <li>
              <a href="/">
                <FiAlignJustify />
              </a>
            </li>
          </ul>
        </section>

        <section id="post-like">
          <h5>90 curtidas</h5>
        </section>

        <section id="post-title">
          <h5>Agraluca</h5>
          <h4>Um texto qualquer</h4>
        </section>
        <section id="post-time">
          <h5>HÁ 5 MINUTOS</h5>
        </section>

        <section id="post-input">
          <input type="text" placeholder="Adcione um comentario..." />
          <button>Publicar</button>
        </section>
      </main>
      <aside></aside>
    </section>
  );
}

export default Header;
```

E não esquecendo de popular o styles.css com:

```css
section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 3rem 3rem;
}
main {
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  width: 35%;
  height: 40%;
  background-color: #fff;
}
#header-post {
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}

#header-post .profile-image {
  display: flex;
  align-items: center;
}

#header-post img {
  margin-left: 1rem;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
}

#header-post svg {
  margin-right: 1rem;
  font-size: 20px;
  opacity: 0.8;
  cursor: pointer;
}

#header-post h5 {
  margin-left: 1rem;
  font-size: 0.9rem;
  color: #262626;
  opacity: 0.8;
}

main img {
  width: 100%;
}

#post-icons {
  margin: 0.7rem 0;
  display: flex;
  justify-content: flex-start;
}

#post-icons ul {
  display: flex;
  list-style: none;
}

#post-icons ul li {
  margin: 0 0.8rem;
}
#post-icons svg {
  font-size: 22px;
  color: #262626;
}

#post-like {
  display: flex;
  justify-content: flex-start;
  margin: 0 1rem;
}

#post-like h5 {
  font-size: 14px;
  color: #262626;
}

#post-title {
  display: flex;
  justify-content: flex-start;
  margin: 1rem 1rem;
}

#post-title h4 {
  font-size: 14px;
  font-weight: 500;
  margin-left: 0.4rem;
}

#post-time {
  display: flex;
  justify-content: flex-start;
  margin: 0.2rem 1rem;
}

#post-time h5 {
  font-size: 10px;
  font-weight: 300;
  color: #3b3b3b;
  opacity: 0.9;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

#post-input {
  display: flex;
  justify-content: flex-start;
  margin: 0;
  border-top: 1px solid #dbdbdb;
  flex: 1;
}

#post-input input {
  width: 100%;
  height: 3rem;
  border: none;
  outline: none;

  margin: 0 1rem;
}

#post-input button {
  margin-right: 1rem;
  border: none;
  color: #0095f6;
  background-color: #fff;
  opacity: 0.5;
}

@media (max-width: 1100px) {
  main {
    height: 40%;
    width: 100%;
  }
  aside {
    display: none;
  }
}
```

## Finalizando...

Então teremos o nosso componente de posts prontinho e funcionando.

Com isso podemos reutilizar ele com um loop, como já aprendemos no [post de fetch](https://oladev.com.br/basico-ao-avancado-s01e06/) para imprimir todos os posts que tivermos na nossa API.

Hoje a aula foi bem curtinha, mas deu uma vida enorme para nossa rede social! Espero que tenham gostado, forte abraço!