---
title: Básico ao Avançado S01E13
description: Curso básico ao avançado S01E13
date: 2020-10-12 01:45:27
image: ../assets/img/api-pt5.jpg
category: JS
background: "#8A1919"
---
# Olá dev!

![capa do curso básico ao avançado, episódio doze: API REST parte cinco](../assets/img/api-pt5.jpg)

Hoje iremos fechar nossa aula da nossa API REST! Wuhul! Iremos aprender sobre o método post, utilizaremos o método get para retornarmos nossos resultados, utilizaremos o Insomnia para criarmos nossas requisições e para ver o resultado. E para fechar veremos o nosso banco de dados sendo populado. Muita coisa interessante para acrescentarmos ao nosso conhecimento! Obviamente que não cobrimos tudo sobre API's REST. Não iremos falar sobre o método put e delete. Mas só de curiosidade irei deixar no finalzinho do nosso post, como seria o método delete - que é hiper simples! Segue o vídeo abaixo de tudo que fizemos hoje:

<iframe title="video da série básico avançado, episódio treze" width="933" height="525" src="https://www.youtube.com/embed/ZKANHgiTNLE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Nossa rota de post...

Hoje utilizamos essa método super importante: post
Com ele conseguimos submeter algum tipo de recurso para o servidor. Dessa forma conseguimos, por exemplo, popular nosso banco de dados com o envio de algum tipo de informação. No nosso caso, conseguimos enviar para no Mongo.DB o título, descrição, usuário e url da imagem. Para conseguirmos mais pra frente recebermos essas informações na nossa aplicação no front-end. Para fazermos nossa rota nova com o método post precisamos do seguinte:

* Localização dessa nova rota
* O parâmetro body
* .create do mongoose

> Não podemos esquecer de importar o mongoose, visto que iremos utilizar ele no nosso arquivo routes.js

```javascript
import mongoose from "mongoose"
```

### Juntando...

Como primeiro passo, precisamos passar o caminho que usaremos o nosso método post para isso basta escolher o caminho, eu escolhi "/upload".

Depois precisamos entender o conceito do parâmetro body. Nele iremos enviar no corpo dessa requisição um objeto JSON, assim quando efetuarmos nosso método post, ele irá enviar tudo que tiver escrito no seu corpo, para o servidor. Lembrem-se que esse envio deve ser feito no formato JSON - já expliquei aqui no blog o que é JSON, [nesse post](https://oladev.com.br/basico-ao-avancado-s01e06/).

Finalmente teremos o .create do mongoose que facilida muito a criação de conteúdo com o método post. Com ele basta pegarmos nosso model - no caso ele está na nossa constante "Content" e chamarmos esse método .create. Dentro dele passaremos o body, ou seja, tudo que estiver escrito no corpo da nossa requisição e uma arrow function contendo esses dados ou um erro. Ficando assim:

```javascript
routes.post("/upload", (req, res) => {
  const body = req.body;
  Content.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
```

Então recapitulando... Primeiro chamamos nosso routes e criamos o método post, dentro dele passamos o caminho e (a requisição e a resposta). Criamos uma constante que receberá o corpo da requisição para então criarmos, baseado no nosso modelo, essa requisição. Dentro do Content.create() passamos a nossa constante body, que contém o corpo da requisição e uma arrow function que recebe um erro ou um dado. Se acontecer um erro, devolvemos uma resposta com o erro. Caso contrário, devolvemos a resposta com os dados enviados.

## Nossa rota get...

Para então conseguirmos receber tudo que criarmos com nossa rota de post utilizaremos o método get que vimso anteriormente. Novamente o mongoose irá auxiliar nisso tudo com uma propriedade legal. Nesse caso vamos criar nossa rota em "/view". Não precisaremos de nenhum parâmetro dessa vez. 
Para aproveitar o gancho, temos três tipos de parâmetros:

* Query Params (utliza-se em métodos get)
* Route Params (utliza-se em métodos get)
* Body Params (utliza-se em métodos post e put)

Não irei entrar em detalhes, mas deixarei de referência um link da Rocketseat que fala muito bem sobre o assunto:

Referência: [Rocketseat, tipos de parâmetros nas requisições REST ](https://blog.rocketseat.com.br/tipos-de-parametros-nas-requisicoes-rest/)

Então nosso código ficará muito parecido com o anterior, porém sem o parâmetro req.body e a propriedade do mongoose será diferente, o  find(), que receberá somente nosso (req,res). Fincando assim:

```javascript
routes.get("/view", (req, res) => {
  Content.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
```

Como podem ver, iremos simplesmente criar uma rota get na rota "/view" com uma arrow function que receberá uma requisição e uma resposta. Dentro dela procuraremos dentro do nosso model, caso haja erro receberemos como resposta um erro, caso contrário receberemos como resposta os dados.

## Usando o insomnia...

Dentro do insomnia iremos criar nossa requisição de post. Para isso vamos seguir esses passos: 

1- Clicar em new request

2- Nomeá-lo

3- Colar nossa url da nossa aplicação (com a rota correta do método post): http://localhost:4000/upload

4 - Mudar o tipo do corpo para JSON

5- Preencher o corpo com um objeto JSON:

```json
{
	"title": "Minha primeira API com oladev",
	"description": "Lorem Ipsum dolor sit  amet...",
	"user": "Oladev",
	"imageUrl": "https://images.unsplash.com/photo-1602205958591-1a536abe895c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
}
```

6- Clicar em criar

Depois desse passo a passo iremos receber como resposta exatamente o que acabamos de enviar, na tela de "Preview" logo ao lado.

Agora podemos duplicar nossa rota clicando com o botão direito. Dai mudamos o nome, a url - que agorá será http://localhost:4000/view - o método para get e escolhemos no lugar do corpo JSON: "No body". Ao enviarmos devemos receber todos os objetos criados com nosso método post.

## Para finalizar...

Iremos abrir nosso Mongo.DB, no nosso cluster, em um botão escrito "COLLECTIONS" e conseguiremos ver nossos "contents" com todos os objetos que criamos! 

Finalmente temos nossa API, pronta! Claro, uma API REST pequena e bem simplificada, mas que irá nos ajudar muito nessa jornada! Para em breve criarmos nosso front-end todo interligado.

Espero que tenham gostado e que tenham aprendido muito! Forte abraço!

Como prometido, aqui ficaria  a forma de criar a rota para remover algum objeto que criamos no nosso método post: 

```javascript
routes.delete("/view/:id", (req, res) => {
  Content.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});
// Para ver funcionar basta ir no Insomnia, criar uma nova rota:
// http://localhost:4000/view/<insiraIdDeItemQueDesejaExcluir>
// Mudar o tipo dela para Delete, retirar o corpo e enviar
// =D
```