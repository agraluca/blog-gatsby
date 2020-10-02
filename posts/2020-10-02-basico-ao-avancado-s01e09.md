---
title: Básico ao Avançado S01E09
description: Curso básico ao avançado S01E09
date: 2020-10-02 11:49:50
image: ../assets/img/api-parte1.jpg
category: JS
background: "#8A1919"
---
# Olá dev!

![capa do curso básico ao avançado, episódio nove: API REST parte um](../assets/img/api-parte1.jpg)

Tudo bem com vocês? Hoje iremos botar a mão na massa, dando os primeiros passos para criar nossa API. Como pré-requisito iremos precisar do Node.JS que aprendemos o que é e como instalar no [último post](https://oladev.com.br/basico-ao-avancado-s01e08/). Espero que estejam empolgados como eu estou... Acredito que essa parte de construir nossa API deva levar algo entorno de 3-4 posts. Vamos aprender bastante conteúdo legal. Como instalar dependências, usar o código no localhost, criar nossas rotas, conectar nosso banco de dados, utilizar o insomnia... enfim, serão muitos assuntos super importantes. Segue video da primeira parte:

<iframe title="video da série básico ao avançado episódio nove: API REST parte um" width="900" height="500" src="https://www.youtube.com/embed/9KJpoRS3qbo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Primeiros passos...

Bom para começar eu recomendo que já criem uma conta no site do [Mongo.DB](https://www.mongodb.com/). Ele será nosso banco de dados que utilizaremos mais pra frente. Para criar conta é bem simples, no vídeo eu explico, zero complicações e totalmente gratuito. Após criar a conta iremos deixar ela de lado para no futuro podermos acessar.

Como explicado no vídeo, a stack que utilizaremos é o MERN, muito famosa no mercado de desenvolvimento.

> Stack é o conjunto de tecnologias escolhidas para criação de nossa aplicação

MERN significa: 

- Mongo.DB: Banco de dados não SQL

- Express.JS: Framework para aplicações web para Node.js feito para construir aplicações web e API's

- React.JS: Biblioteca de JS com foco em criações de interfaces de usuários em páginas web

- Node.JS: Run time de JS que executa códigos a nível de back-end e front-end

No nosso back-end utilizaremos o Node.JS e o Express.JS, conectando eles ao Mongo.DB.

Mais pra frente veremos como usar o React.JS para tornar nossas aplicações em algo estético.

## O terminal...

Para então sentirmos o gostinho do projeto funcionar vamos abrir nosso terminal. Se tiverem no Windows basta abrir o cmd, como já ensinei em outros posts. Nessa hora eu recomendo que criem uma pasta somente com os projetos de vocês. Para fazer isso quando abrirem o terminal basta criar uma pasta com um nome que vocês lembrem, algo como Desenvolvimento.

Para fazer isso é simples, basta digitar "mkdir Desenvolvimento". A pasta então foi criada, para entrar nela é só escrever "cd Desenvolvimento". Dentro dessa pasta, a partir de agora, vocês irão criar todo tipo de aplicação que precisarem.

Dentro da pasta Desenvolvimento escrevam "mkdir primeira-api". Esse foi o nome que dei para esse projeto, mas podem nomear como quiserem. Novamente escrevam "cd primeira-api" para mudarem pra pasta desse projeto. 

Por fim, escrevam "npm init -y". Esse comando irá criar o package.json. O package.json é uma espécie de manifesto, nele iremos ter diversas informações de nossa aplicação, inclusive podemos escrever configurações dentro dele. 

Com isso podemos abrir nosso VSCode com o "code ." ou abrir manualmente e escolher a pasta.

## Primeiras dependências...

Com o VSCode aberto, vamos abrir o terminal dele, e baixar nossas dependências. Para baixar dependências com o NPM é  simples, precisamos escrever:

npm install nomeDaDependencia 

Como vimos, precisaremos baixar 

- express

- mongoose

- nodemon

- cors

- envdot

Ficando assim: npm install express mongoose nodemon cors envdot

Com isso ira aparecer a pasta node_modules e a package-lock.json. 

A primeira é a pasta com todas as dependências que baixamos e todos os arquivos necessários para nossas dependências funcionarem.

O segundo é a nossa árvore de dependências, é com ela que nossa aplicação saberá quais dependências foram baixadas, as suas configurações e afins. A gente não mexe nesse arquivo. E ele é extremamente importante.

## Se preparando para o pior...

Também cito no finalzinho do vídeo que em caso de perdermos a pasta node_modules basta darmos "npm install" que tudo irá voltar, isso ocorre graças ao package-lock,json, ele tem todas as informações para reconstruir nossa node_modules. 

## Por hoje é isso...

Minha ideia foi repartir essa API em vários vídeos menores. Acho que fica melhor de se absorver, invés de um vídeo gigante e denso. Nos próximos posts iremos aprender sobre configurações no package.json, como começar nosso server no localhost, imports, configurações gerais e como criar nossa primeira rota. Espero que tenham gostado! Forte abraço!