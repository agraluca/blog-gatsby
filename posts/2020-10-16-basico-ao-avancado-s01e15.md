---
title: Básico ao Avançado S01E15
description: Curso básico ao avançado S01E15
date: 2020-10-16 01:08:45
image: ../assets/img/react_pt2.jpg
category: JS
background: "#8A1919"
---
# Olá dev!

![capa do curso básico ao avançado, episódio quinze: React.JS parte dois](../assets/img/react_pt2.jpg)

Tudo bem com vocês? Hoje iremos dar continuidade na nossa Rede social ZapTalk! Bom, a aparência dela será de um clone do Instagram, com algumas mudanças. Hoje iremos aprender um pouco sobre componentização e JSX. Apesar do video ter ficado um pouco longo, o post será curto. Eu trouxe o HTML e o CSS já pronto para vocês, assim focamos em aprender sobre o React.JS. Segue video:

<iframe title="vídeo da série básico avançado, episódio quinze" width="933" height="525" src="https://www.youtube.com/embed/6ojuHrpIzto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## O que é componentização...

Bom, quando estamos construindo uma aplicação com o React.JS utilizamos muito os componentes. Sabe quando entramos num site e vemos diversas áreas dele se repetindo em todas as partes do site? Como por exemplo o header, footer, posts... Enfim, existem diversos componentes que se repetem e tudo varia de aplicação para aplicação. 

> O component é uma fração da nossa aplicação que criamos em um arquivo e reaproveitamos ele em outras partes do nosso código, seja para poupar tempo ou para organizar melhor nosso código

Para fazer essa seoaração basta criarmos dentro da nossa pasta src um pasta chamada components. Dentro dessa pasta teremos nosso componentes.

## Começando...

Para começar precisamos criar um pasta chamada pages dentro do nosso src. Dentro dela iremos criar nossa primeira função. No React.JS utilizamos um tipo de programação diferente, a programação funcional. Nela utilizamos de funções para criar nossa aplicação, seja uma função estrutural ou uma função que faz algo. Para criarmos nossa função devemos importar o react, criar uma função para por fim exporta-la, ficando assim:

```javascript
import React from "react";


function Main() {
  return (
    <div> 
      <h1> Oladev </h1>
    </div>
  );
}

export default Main;

```

Dessa forma conseguiremos importar essa função dentro do nosso App.js. Ficando assim:

```javascript
import React from "react";
import Main from "./pages/Main";

function App() {
  return <Main />;
}

export default App;

```

Agora tudo que fizermos no nosso arquivo Main irá refletir na nossa aplicação. Agora para deixar tudo mais organizado iremos criar nossos componentes dentro da pasta components.

Para fazer isso vamos primeiro o nosso header, responsável pelo cabeçalho 

Dentro dessa pasta vamos criar o index.js e o styles.css.

No index iremos fazer nossa função Header() e exporta-la:

```javascript
import React from "react";
import "./styles.css";


function Header() {
  return (
   
  );
}

export default Header;

```

Não vamos esquecer de importar nosso CSS

E dentro dela iremos colar nosso HTML que na verdade se chama JSX

\## JSX...

O JSX tem uma sintaxe quase igual ao HTML, com pequenas diferenças. No geral as tags são todas iguais, o que irá mudar são seu atributos. O nosso famoso class do HTML no JSX se chama className. 

Ao longo da série iremos ver algumas mudanças, mas não é nada para se preocupar. Com isso iremos inserir nosso JSX que já deixei separado para vocês

\> Antes vamos instalar o [React Icons](https://react-icons.github.io/), uma biblioteca com vários ícones: 

```javascript
npm install react-icons --save
```

Com ele instalado podemos importar os ícones que quisermos, então podemos seguir para o nosso JSX

```javascript
import React from "react";
import "./styles.css";
import { FiZap } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

function Header() {
  return (
    <header id="headerWrapper">
      <a href="/">
        <div className="logo">
          <FiZap />
          <h4>ZapTalk</h4>
        </div>
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">
              <FiHome />
            </a>
          </li>

          <li>
            <a href="/create-post">
              <FiPlus />
            </a>
          </li>

          <li>
            <a href="/">
              <img
                src="https://oladev.com.br/assets/img/logoOg.png"
                alt="Imagem de perfil"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

```

Com o header pronto podemos importa-lo dentro da página Main:

```javascript
import React from "react";
import Header from "../components/Header/index";


function Main() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default Main;

```

Agora vamos finalizar umas estilizações. No styles.css do Header vamos pegar o código:

```css
#headerWrapper {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  border-bottom: 1px solid #dbdbdb;
  font-size: 1.5rem;
}
#headerWrapper a {
  text-decoration: none;
}

#headerWrapper .logo {
  display: flex;
  align-items: center;
}

#headerWrapper .logo svg {
  color: #ffd666;
}

#headerWrapper .logo h4 {
  color: #3b3b3b;
  margin-left: 5px;
}

nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  text-decoration: none;
  color: rgb(38, 38, 38);
}

.material-icons {
  font-size: 38px;
}

nav ul li a img {
  height: 28px;
  border-radius: 50%;
}

```

E no index.html vamos importar as fontes do Google Fonts, para isso bas colar no head o seguinte:

```html
 <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700;1,800&display=swap"
      rel="stylesheet"
    />
```

O head do index.html ficará assim:

```html
 <head>
    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700;1,800&display=swap"
      rel="stylesheet"
    />
    <title>ZapTalk</title>
  </head>
```

E para finalizar, vamos criar um css global que será responsável por colocar configurações globais na nossa aplicação. Para isso vamos criar um pasta chamada "css" dentro do "src" e dentro dessa pasta "css" vamos criar o Global.css. Dentro dele colocaremos:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #fafafa;
}

body,
input,
placeholder {
  font-family: "Poppins", sans-serif;
}

```

Por fim iremos importar esse Global.css no App.js. Ficando assim:

```javascript
import React from "react";
import Main from "./pages/Main";
import "./css/Global.css";

function App() {
  return <Main />;
}

export default App;

```

Com isso teremos o nosso Header já estilizado, funcionando com o nosso JSX, construído com componentes e funções.

\## No próximo post...

Iremos ver o componente dos posts! Espero que tenham gostado e aprendido bastante. Revisem o código quantas vezes for necessário e se tiverem dúvidas, so mandar! 

Forte abraço, até a próxima!