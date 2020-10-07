---
title: Básico ao Avançado S01E11
description: Curso básico ao avançado S01E11
date: 2020-10-07 04:36:26
image: ../assets/img/api_parte3.jpg
category: JS
background: "#8A1919"
---
# Olá dev!

![capa do curso básico ao avançado, episódio onze: API REST parte três](../assets/img/api_parte3.jpg)

Tudo bem com vocês? Hoje iremos conectar o nosso banco de dados, o Mongo.DB, ao nosso back-end. O passo a passo é bem tranquilo, segue o vídeo: 

<iframe title="video da série básico avançado, episódio onze" width="933" height="525" src="https://www.youtube.com/embed/MpvzjskI3WI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Criando o Cluster...

Para iniciar precisamos criar um cluster, para fazer isso é bem simples. Precisamos criar um novo projeto dentro do Mongo.DB e nomeá-lo, após fazer isso precisamos clicar em build cluster, escolher o JavaScript como linguagem e escolher o plano gratuito do cluster. Fazendo isso basta clicar em create cluster e aguardar ele ser criado - isso leva cerca de 3-5 minutos.

### Conectando...

Após criarmos o cluster precisamos conecta-lo, sem segredo também. Basta clicar em connect, fazendo assim que uma aba apareça, nessa aba teremos que configurar o IP e o usuário e senha do nosso banco de dados. Para configurar o IP é simples, basta clicarmos em "Allow Access from Anywhere" e "Add IP Address". E para configurar o restante basta escolher um usuário e senha - recomendo que escolham senhas seguras - que vocês não se esqueçam. Depois é so clicar em "Create Database User" e em "Choose a connection method". 

Com isso vocês irão receber um código parecido com esse: 

```
mongodb+srv://oladev:<password>@cluster0.j72az.mongodb.net/<dbname>?retryWrites=true&w=majority
```

## No VsCode...

Na pasta da nossa aplicação, no arquivo server.js no comentário que fizemos para configurar o db iremos, finalmente, conectar o nosso Mongo.DB na nossa API. Para isso precisamos do comando que o [mongoose](https://mongoosejs.com/) nos possibilita usar:  mongoose.connect()

Nele iremos colar entre aspas esse código que copiamos. A única diferença é que iremos inserir no lugar de <password> a senha que você escolheu e em <dbname> um nome para seu banco de dados - escolham algo que faça sentido. Supondo que sua senha seja abc123 e que você quer que seu db tenha o nome oladevDb ficaria:

```
mongodb+srv://oladev:abc123@cluster0.j72az.mongodb.net/oladevDb?retryWrites=true&w=majority
```

Depois desse passo, iremos passar como segundo parâmetro um objeto com algumas informações, essas informações previnem alguns bugs. [Nesse link do mongoose](https://mongoosejs.com/docs/deprecations.html) vocês podem dar uma olhada, mas já adianto que não precisam entender a fundo, é uma daquelas coisas que só olhamos na documentação e aceitamos rs. Ficando algo parecido com: 

```javascript
//configurar o banco de dados (db)
mongoose.connect("mongodb+srv://oladev:<password>@cluster0.j72az.mongodb.net/<dbname>?retryWrites=true&w=majority", 
{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

Fazendo isso o seu DB já estará funcionando, mas para termos um feedback no nosso console faremos mais um passo.

## O feedback...

Precisamos passar um comando simples, que é o mongoose.connection.once(). O que ele está fazendo é ver, uma vez que, a conexão esteja estabelecida, o status dela. Como passamos como parâmetro "open", ele irá executar - somente quando o status for open - uma arrow function que irá dar um console.log("db está conectado"), então teremos um código assim: 

```javascript
mongoose.connection.once("open", () => console.log("db está conectado"));
```

Agora iremos ver no nosso console do VsCode sempre que o DB estiver conectado e funcionando. 

## Segurança...

Por fim, vamos tornar nossa aplicação um pouco mais segura. Não é uma prática boa deixar o código de conexão dentro dos nossos arquivos e pra resolver isso iremos utilizar um plugin chamado dotenv - nas últimas aulas eu ensinei a baixar o arquivo errado, portanto garantam de corrigir isso baixando com npm install dotenv o plugin. E removendo o envdot com npm remove envdot. 

Agora que temos o plugin certo, vamos criar na pasta raiz um arquivo chamado ".env", exatamente como está escrito, com o ponto antes. 

Após criar o arquivo .env vamos importar o dotenv no nosso server.js, do jeito que ensinei anteriormente: 

```javascript
import env from "dotenv"
```

E nas configurações do app vamos incluir env.config(), ficando assim:

```javascript
// configurar o app
const app = express();
env.config();
const port = process.env.PORT || 4000;
```

 Isso irá permitir que nosso arquivo possa utilizar as variáveis que contenham nesse arquivo env.

Por fim, vamos dentro desse arquivo .env criar uma variável com o nome do nosso agrado. Eu chamei de CONNECTION_MONGO - normalmente damos o nome todo em caps.

Após criar essa váriavel vamos passar um igual e colar aquele mesmo conteúdo que o MongoDB passou, só que com a senha e nome do DB encaixada (foi o segundo código desse post). Ficando assim:

```
CONNECTION_MONGO = mongodb+srv://oladev:abc123@cluster0.j72az.mongodb.net/oladevDb?retryWrites=true&w=majority
```

E ai pra correr pro abraço é só substituir no mongoose.connect() por process.env.CONNECTION_MONGO que irá funcionar igualzinho a antes, porém, de uma forma mais segura: 

```
mongoose.connect(process.env.CONNECTION_MONGO, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

## É isso pessoal...

Por hoje é isso, vimos como conectar o Mongo.DB a nossa API. Nos próximos posts iremos criar nossas primeiras rotas, que serão armazenadas no nosso DB =) 

Espero que tenham gostado! Forte abraço!