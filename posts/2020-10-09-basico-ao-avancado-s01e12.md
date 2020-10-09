---
title: Básico ao Avançado S01E12
description: Curso básico ao avançado S01E12
date: 2020-10-09 01:15:49
image: ../assets/img/api-parte4.jpg
category: JS
background: "#8A1919"
---
# Olá dev!

![capa do curso básico ao avançado, episódio doze: API REST parte quatro](../assets/img/api-parte4.jpg)

Estamos bem perto de finalizar nossa API! Hoje iremos, criar um arquivo de rotas e criar um Schema.

\> Schema é uma forma de estruturar um documento que irá apontar para uma coleção nosso banco de dados - o Mongo.DB.

O Schema tem uma forma de objeto e irá simplificar muito a nossa vida! Segue o video abaixo: 

<iframe title="video da série básico avançado, episódio doze" width="933" height="525" src="https://www.youtube.com/embed/AZyEcOvA3Gw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Routes...

Vamos começar por nossas rotas. Por questões de organização iremos criar um arquivo somente para as rotas. Para isso precisamos criar na pasta src o arquivo routes.js. 
Dentro dele precisamos importar o express e criar uma constante que irá permitir o roteamento da nossa aplicação, o express.Router() será o responsável por gerenciar nossas rotas, essa é basicamente sua função. Por fim devemos exportar nossa constante routes:

```javascript
import express from "express";
const routes = express.Router();

export default routes
```

Fazendo isso precisamos importar esse arquivo routes.js no nosso server.js:

```javascript
import routes from "./src/routes.js"; 
```

Podemos também copiar nossa única rota que temos no server.js e recorta-la para o arquivo routes. E no lugar onde recortamos a nossa rota, precisamos chamar esse arquivo routes que será responsável por cuidar das rotas, ficando assim: 

```
//api routes
app.use(routes);
```

Com isso, o arquivo routes terá nossa rota antiga e todas as novas que criarmos:

```javascript
import express from "express";
const routes = express.Router();

//rotas
routes.get("/", (req, res) => res.send("Nossa primeira API"));

export default routes
```

Com isso teremos nosso servidor funcionando igual a antes, porém, de forma mais organizada!

## Schema...

Nessa parte aprenderemos a criar nosso schema, iremos conseguir visualizar melhor o que ele faz no próximo post, pois iremos criar nossas primeiras requisições! Mas  basicamente o Schema irá popular nosso banco de dados com uma forma de objeto. E como ja aprendemos anteriormente nas aulas de JS, acessar objetos é muito fácil! Utilizaremos o .map() com o fetch() - igual fizemos na aula que criamos o blog - para poder acessar as coleções da nossa API. Chega de enrolação, vamos ao passo a passo:

Na pasta src devemos criar a pasta model e dentro dela um arquivo chamado contents.js. O nome fica ao gosto de vocês, mas sugiro que nesse primeiro exemplo criem igual a mim, para funcionar tudo certinho. Dentro do contents.js vamos importar o mongoose: 

```javascript
import mongoose from "mongoose";
```

Para então criarmos o Schema. Para isso é bem fácil, basta nomearmos o Schema numa constante e passar a propriedade que cria esse Schema: 

```javascript
const ContentSchema = new mongoose.Schema({})
```

Dentro desse objeto passaremos as propriedades que precisamos. Nesse caso eu passei:

\- title (título)

\- description (descrição)

\- user (usuário)

\- imageUrl (url da imagem)

Dentro deles eu passei o tipo, e existem alguns, mas utilizamos somente String:

[](https://mongoosejs.com/docs/schematypes.html#strings)-  String 

\- Number

\- Date

\- Array

\-Entre outros...

Referência acerca dos tipos: [Mongoose Schema Types](https://mongoosejs.com/docs/schematypes.html#arrays)

E também passei que eles eram obrigatórios, ou seja, eles precisam ser recebidos. Mas caso opte por não ser obrigatório, só mudar para false. No fim nosso Schema ficou assim:

```javascript
const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});
```

Agora precisamos exportar esse model, para isso precisamos fazer assim:

```javascript
export default mongoose.model("Content", ContentSchema);
```

O primeiro valor é o nome que precisaremos para acessar esse modelo mais pra frente. O segundo valor é o nome que damos a nossa constante, logo acima.

Agora voltamos para nosso arquivo routes.js e vamos importar nosso Schema. Para isso precisaremos importar o mongoose, o arquivo contents.js e finalmente precisamos chamar nosso modelo ficando assim:

```javascript
import mongoose from "mongoose";
import Contents from "./model/contents.js";

const Content = mongoose.model("Content");
```

Notem que atribuo uma variável que tera acesso a estrutura do nosso model. E dentro passamos o nome que damos ao exportar nosso Schema, ou seja, colocamos dentro "Content".

## Finalizando...

Por hoje é isso pessoal, daremos continuidade a criação de nossas rotas, com nossas requisições, no próximo post! Iremos ver nossa API criar vida, finalmente! Com isso conseguiremos finalizar nossa API e partir para nosso front-end. Espero que tenham gostado e que estejam ansiosos, assim como eu. 

Forte abraço!