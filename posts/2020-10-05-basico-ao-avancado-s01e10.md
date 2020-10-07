---
title: Básico ao Avançado S01E10
description: Curso básico ao avançado S01E10
date: 2020-10-05 06:33:04
image: ../assets/img/api-parte2.jpg
category: JS
background: "#8A1919"
---
# Olá dev!

![capa do curso básico ao avançado, episódio dez: API REST parte dois](../assets/img/api-parte2.jpg)

Tudo bem com vocês? Hoje daremos continuidade a parte dois do post anterior. Na [última aula](https://oladev.com.br/basico-ao-avancado-s01e09/) aprendemos sobre nossa Stack e como instalar dependências. 

Agora iremos aprender a importar essas dependências para nossos arquivos, como configurar o comando que da start no nosso servidor, configurações gerais, portas e nossa primeira rota. Segue o vídeo abaixo com a explicação:

<iframe  title="video da série básico avançado, episódio dez" width="933" height="525"  src="https://www.youtube.com/embed/9Dac8e02gyw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## O start...

Para começar, é importante entendermos o que é esse comando utilizado no início do vídeo. Para entendermos melhor vamos dar uma olhada no que é o nodemon:

> Nodemon é uma ferramenta que ajuda desenvolvedores de Node.JS a recomeçarem o servidor em caso de alguma mudança seja feita, de forma automática.

Pois é, sem o nodemon precisaríamos ficar dando o comando de start toda hora. Dessa forma basta criarmos o comando start, dentro de scripts, adicionando o nodemon na frente. Ficando então:

```javascript
"start": "nodemon src/server.js "
```

> O caminho src/server.js é referente ao arquivo que está dentro da pasta src que queremos que seja ouvido.

## O import...

Após conseguirmos criar nosso comando de start, com sucesso, vamos entender como funciona o import. Para utilizarmos qualquer tipo de biblioteca, framework, imagem, código reutilizável e etc, precisamos importa-los. Para fazer isso é muito simples, basta que escrevamos: import nomeFacilDeLembrar from "bibliotecaQueIremosImportar"
Vamos usar de exemplo um dos imports que fizemos. Para importar o express fizemos o seguinte: import express from "express"
Na primeira parte nós damos um nome que lembre o que iremos utilizar, visto que é o nome utilizado na nossa aplicação, então não vale usar algo muito complicado. Já a segunda parte é obrigatório ser como a biblioteca/framework pede - normalmente é o nome dessa biblio./framework. 

Lembrem-se que o primeiro nome a direita do import é como iremos chamar ele no nosso código. Então se chamarmos: import banana from "cors" eu irei utilizar no código app.use(banana()); 
Obviamente não fazemos isso...

## Comentando o código...

Por questões de organização vale muito a pena comentar o código antes de começar a escrever de verdade, separando cada parte dele. Para fazer isso basta usar duas barras //, que tudo ira funcionar corretamente. Algo como:

```javascript
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// configurar o app

//configurar o cors

//configurar o banco de dados (db)

// rotas de api

// listener
```

## Configurações gerais...

Aprendemos no vídeo que utilizamos const para guardar nossas constantes, sendo que antigamente utilizamos o let. Essa diferença se da pelo fato de const garantir um valor de inicialização que não será alterado mais a frente. 
Referência: [Diferença entre var, let, const](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript)
No nossa caso precisamos criar uma constante, que chamei de app, com a chamada do express: const app = express()

Aproveitamos e criamos também um constante que contém o valor da porta que utilizaremos no localhost. No vídeo escrevemos isso:

```javascript
const port = process.env.PORT || 4000;
```

A porta que escolhi foi a 4000, mas pode ser um valor qualquer. Contanto que você não tenha outras portas sendo utilizadas por outras aplicações. Essa parte do início te ajuda a quando formos usar um serviço externo para podermos colocar nossa API no ar, esse serviço utilize a porta padrão dele. Então nosso código está fazendo o seguinte:
Crie uma variável porta, e dentro dela vamos utilizar o valor da porta de terceiros OU a porta 4000. É isso que o || significa.

> \|| = OU

### Midlewares...

Nessa parte utilizamos middlewares. que se consiste em utilizar app.use().

> Middleware é todo o tipo de função que está entre um pedido HTTP e a resposta final que o servidor envia de volta para o cliente.

```javascript
app.use(express.json());
app.use(cors());
```

No primeiro caso só estamos reconhecendo a requisição como um objeto JSON. Já no segundo caso é um pouco mais complicado. 

> CORS significa Cross-origin resource sharing (compartilhamento de recursos de origem cruzada) é uma especificação de uma tecnologia de navegadores que define meios para um servidor permitir que seus recursos sejam acessados por uma página web de um domínio diferente.

Em português claro, o CORS serve para podermos configurar mais pra frente a nossa comunicação entre nosso front-end e nossa API. Quando formos utilizar o fetch(), tudo funcionará de forma correta.

Referência: [MDN Web Docs CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)

Mas não precisa se esquentar com isso. Só de fazer esse comando, tudo irá funcionar perfeitamente.

## Primeira rota da nossa API...

Para criar nossa primeira rota foi simples. Basta entendermos que existem alguns tipos de requisições - para te ser sincero eu sabia da existência das 4 mais famosas, mas pelo que contei existem nove. Como o objetivo dessa aula não é falar sobre elas irei só explicar que  a requisição get solicita um recurso específico e retorna os dados desse pedido. 
Imagina que você esta em um restaurante e pede para o garçom o cardápio. O que ele irá fazer? Exatamente! Te dar o cardápio. Com o cardápio você poderá ver todo o conteúdo daquele pedido, ou seja, poderá ver os pratos desse restaurante.
O método get faz o mesmo. Você pede a informação de uma rota específica e receberá essa resposta.

No vídeo utilizamos da seguinte forma:

```javascript
app.get("/", (req, res) => res.send("Nossa primeira API"));
```

Fazemos um get e dentro dele temos dois parâmetros. No primeiro parâmetro passamos a rota. No segundo fazemos uma arrow function, ou seja, fazemos uma função que irá rodar. Dentro dessa arrow function temos a requisição (o pedido) e a resposta (os dados). Como resposta iremos mandar o texto "Nossa primeira API". Simples assim! 

Isso serve apenas para termo o feedback visual quando acessarmos nosso localhost

## Listener...

Por fim damos o comando que irá dizer para o Node.JS em qual porta iremos ouvir tudo.

```javascript
app.listen(port, () => console.log("Funcionando"));
```

Damos o comando app.listen(). Dentro dele escrevi dois parâmetros:
 O primeiro é a nossa porta, como criamos uma constante anteriormente, iremos passar ela. O segundo parâmetro é opcional, e eu coloquei uma arrow function que irá dar um console.log("Funcionando"), só para ter o feedback no terminal do Node.JS, mas essa parte é opcional.

## Vendo tudo rodar...

Dai basta abrir o seu navegador favorito - e por favor, que não seja o internet explorer (sério) - e escrever: localhost:4000 para poder ver tudo que fizemos... Pode parecer pouco, mas estamos a poucos passos de ter uma API funcionando.

## Isso é tudo...

Não irei me estender mais, o post já está com bastante conteúdo. Espero que tenham gostado, qualquer dúvida só mandar, forte abraço!