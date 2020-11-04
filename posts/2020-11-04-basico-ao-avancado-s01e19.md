---
title: Básico ao Avançado S01E19
description: Curso básico ao avançado S01E19
date: 2020-11-04 11:02:59
image: ../assets/img/react_pt5.jpg
category: JS
background: "#8A1919"
---
# Olá dev!

![capa do curso básico ao avançado, episódio dezenove: React.js parte cinco](../assets/img/react_pt5.jpg)

Tudo bem com vocês? Hoje iremos finalizar a parte dos posts! Wuhul! Hoje teremos um post bem curto, ensinando a realmente colocar as informações que conseguimos da nossa API. No último post conseguimos usar os hooks para conseguir aquele array de informações dos nossos posts. Segue o vídeo:

<iframe title="vídeo da série básico avançado, episódio dezenove" width="933" height="525" src="https://www.youtube.com/embed/LTRQe5iG2yI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## O map no react...

Bom precisamos primeiro entender que para conseguirmos inserir código JavaScript dentro do JSX precisamos coloca-los dentro de chaves "{}". Com isso posto, vamos começar!

Vamos pegar todo o código responsável pela estrutura do post, esse daqui:

```javascript
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
```

E vamos recortar. Fazendo isso teremos isso daqui:

```javascript
import React, { useEffect, useState } from "react";
import "./styles.css";
import { FiX } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import api from "../../services/api";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getApi() {
      const res = await api.get("/view");
      console.log(res.data);
      getPosts(res.data);
    }
    getApi();
  }, []);

  return (
   // insira loop aqui
  );
}

export default Posts;
```

Agora dentro do return vamos usar o .map() para fazer o loop de dentro da nossa constante "posts". Como ja vimos anteriormente, dentro do map precisamos passar o nome que nosso parâmetro novo ira se chamar. Desse jeito teremos essa estrutura:

```javascript
// nosso loop:
}
posts.map(post => {
  return(
    // Cole aqui o recortado
  );
})
};
```

Com isso conseguimos acessar o nome do usuário, a url da imagem, o título e o id da foto normalmente. Como ja aprendemos na aula de objetos, bastando escrever post.NomeDaPropriedade.

> Vale lembrar que para inserir essas informações dentro do nosso primeiro return, precisamos das chaves "{}", visto que isso é um código de JS.

> Importante ressaltar que iremos utilizar os react fragments logo após o primeiro return, visto que precisamos de uma tag pai englobando as outras tags

Por fim ficaremos com:

```javascript
import React, { useEffect, useState } from "react";
import "./styles.css";
import { FiX } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import api from "../../services/api";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getApi() {
      const res = await api.get("/view");
      console.log(res.data);
      setPosts(res.data);
    }
    getApi();
  }, []);

  return (
    <>
      {posts.map((post) => {
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
        );
      })}
    </>
  );
}

export default Posts;
```

Prontinho, agora só precisamos trocar as informações hard coded pelas informações que temos dentro de "post.Propriedade"

Na nossa api precisamos de algumas infos:

- O id do post: post._id 

- O nome do usuário: post.user

- A url da imagem do post: post.imageUrl

- O título do post: post.title

Dai agora é so substituir esse valores nos respectivos lugares

> Lembrar de usar {} para inserir esses valores:

```javascript
import React, { useEffect, useState } from "react";
import "./styles.css";
import { FiX } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import api from "../../services/api";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getApi() {
      const res = await api.get("/view");
      console.log(res.data);
      setPosts(res.data);
    }
    getApi();
  }, []);

  return (
    <>
      {posts.map((post) => {
        return (
          <section key={post._id}>
            <main>
              <header id="header-post">
                <div className="profile-image">
                  <img
                    src="https://oladev.com.br/assets/img/logoOg.png"
                    alt="Imagem do perfil"
                  />
                  <h5>{post.user}</h5>
                </div>
                <FiX />
              </header>
              <img src={post.imageUrl} alt="Foto da postagem" />

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
                <h5>{post.user}</h5>
                <h4>{post.title}</h4>
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
      })}
    </>
  );
}

export default Posts;
```

Notem que eu adicionei uma propriedade chamada key logo após fazer o map. Fazemos isso pois o map "obriga" que a pessoa diferencie ele com um valor próprio. Para fazermos isso basta adicionar a key com o valor do id dentro do elemento consecutivo ao map, nesse caso a section. Visto que o id é um valor único, isso irá resolver nosso problema.

## Ordem dos posts...

Para finalizar vamos colocar nosso post em ordem decrescente, do mais novo para o mais velho. Para fazer isso é bem simples, vamos usar o .reverse() que já vem de fábrica do JS. Vamos ir dentro do nosso useEffect, onde estamos chamando setPosts() e vamos acrescentar o .reverse()

```javascript
useEffect(() => {
    async function getApi() {
      const res = await api.get("/view");
      console.log(res.data);
      setPosts(res.data.reverse()); //Aqui!
    }
    getApi();
  }, []);
//...
```

Pronto, agora tudo vai funcionar do jeito esperado!

## Espero...

Bom por hoje é isso pessoal, espero que tenham gostado! Finalizamos a parte dos posts! Agora precisamos criar ele no nosso site e teremos finalizado nossa série! 

Forte abraço!