---
title: Básico ao Avançado S01E18
description: Curso básico ao avançado S01E18
date: 2020-10-29 01:28:19
image: ../assets/img/react_pt1-1-.jpg
category: JS
background: "#8A1919"
---
# Olá dev!

![capa do curso básico ao avançado, episódio dezoito: React.js parte quatro](../assets/img/react_pt1-1-.jpg)

Tudo bem com vocês? Hoje iremos conectar a nossa API, que está no ar, ao nosso front-end. Sem mais delongas, vamos ao vídeo:

<iframe title="vídeo da série básico avançado, episódio dezoito" width="933" height="525" src="https://www.youtube.com/embed/1cdNUk8WYB0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Começando...

 Para fazer isso precisamos começar instalando o axios. 

\> Axios é um cliente [HTTP](https://howhttps.works/) baseado em [Promises](https://blog.rocketseat.com.br/javascript-assincrono-promises/) para fazer requisições.

Ele tem a mesma função do fetch(). Porém possui as suas vantagens, uma delas é o fato de poder utilizar uma url base para a conexão. Para instalarmos o axios basta escrever:

```javascript
// npm:
npm install axios

//yarn:
yarn add axios
```



Em seguida iremos fazer a conexão á nossa API. Para isso precisamos criar uma pasta, dentro da pasta "src", chamada "services". Dentro de "services" criamos um arquivo chamado "api.js" - o caminho: src/services/api.js.

Dentro do arquivo api.js precisamos:

- Importar o axios

- Criar uma constante que irá receber a criação da conexão da nossa API 

- Exportar nossa constante

Para fazer isso basta escrever o seguinte:

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "https://oladev-api.herokuapp.com",
});

export default api;

```

> Notem que a escrita de "baseURL" deve ser feita exatamente desse jeito


## Nossos primeiros hooks...

Bom, iremos ter contato com os hooks. Os hooks são relativamente novos dentro do React, porém são extremamente poderosos! Iremos utilizar dois deles:

- useEffect()

- useState

Vamos começar pelo useEffect(). Ele é bem similar ao componentDidMount() e componentDidUpdate anteriormente muito utilizados. A função dele é executar uma função assim que seu componente for renderizado e caso haja necessidade, atualiza ele de acordo com alguma dependência caso ela exista. A escrita dele é a seguinte: 

```javascript
import React, {useEffect} from "react"
useEffect(()=>{
//Seu código
},[])
```

> Lembrando que para usar os hooks precisamos importa-los dentro do react

Nesse caso vamos nos aproveitar dele para fazermos um get dentro da nossa api para conseguirmos os nossos posts. Para isso vamos dentro de Posts e vamos importar o nosso useEffect e escrever o seguinte:

```javascript
import React, { useEffect } from "react";
import api from "../../services/api";
//...outrosImports

function Posts() {
useEffect(() => {
    async function getApi() {
      const res = await api.get("/view");
      console.log(res.data);
    }
    getApi();
  }, []);
  //...resto do código
 }
 export default Posts;
```

O que estamos fazendo em cima é bem simples. Estamos criando uma função assíncrona, visto que o recebimento dos dados da API não é instantâneo e por isso precisa aguardar o recebimento para então prosseguir o nosso código, e então estamos criando uma constante de resposta que irá fazer o método get dentro da nossa rota "/view" e logo em seguida chamaremos essa função. 

Fazendo isso se dermos um console.log() com essa constate de resposta notaremos que no console do navegador receberemos um objeto cheio de informações, porém só precisaremos da propriedade "data", por isso no código acima especificamos "res.data". Fazendo isso notaremos que estamos recebendo somente os posts que está no nosso banco de dados.

## E agora...

Beleza, Luca, mas e agora? Temos tudo que precisamos, mas não podemos utilizar.

Correto! Não podemos utilizar... ainda. Para fazer isso precisamos colocar essas informações em algum lugar que permita-nos o acesso dela independente do escopo que estivermos. Ai é que entra o useState()

O useState possui a função de armazenas alguma informação, seja ela uma array, um número, um booleano, string, objetos... O que você precisar. E ele faz mais que isso, ele consegue atualizar os valores de uma forma muito fácil, deixa eu mostrar pra vocês:

```javascript
import React, {useState} from "react"

const [posts, setPosts] = useState([])
```

Sempre que precisarmos acessar os posts basta chamar essa constante posts e sempre que precisarmos atualizar ela basta chamar setPosts(valorAtualizado). Dessa forma vamos encaixar dentro de setPosts a resposta que obtivemos da nossa API, assim, posteriormente iremos utilizar o posts para finalmente coloca-los em tela. Para isso basta fazermos o seguinte:

```javascript
import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { FiX } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";

import "./styles.css";


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
   //...resto do código
 }
 export default Posts;
```

Dessa forma, dentro da nossa constante "posts" agora teremos os nossos posts. 

Notem que eu começo o useState() com um array dentro -> useState(\[])

Esse array representa que o valor inicial dessa constante é um array vazio, posteriormente se preenchendo com um array de objetos.

Fazendo isso, conseguiremos fazer um loop com o .map() para colar essas informações em tela. Mas isso fica para o próximo post. 

Referências:

- [Axios](https://github.com/axios/axios): conteúdo em inglês

- [useState()](https://pt-br.reactjs.org/docs/hooks-reference.html#basic-hooks)

- [useEffect()](https://pt-br.reactjs.org/docs/hooks-reference.html#useeffect)

Espero que tenham gostado, forte abraço!