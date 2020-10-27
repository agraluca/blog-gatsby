---
title: Básico ao Avançado S01E17
description: Curso básico ao avançado S01E17
date: 2020-10-27 02:34:02
image: ../assets/img/api_no_ar.jpg
category: JS
background: "#8A1919"
---
# Olá dev!

![capa do curso básico ao avançado, episódio dezessete: Colocando API no ar](../assets/img/api_no_ar.jpg)

Tudo bem com vocês? Hoje iremos colocar nossa API que construímos no ar, para não termos que ficar rodando o servidor na nossa máquina. O processo é bem simples, mas segue vídeo abaixo, para melhorar o entendimento:

<iframe title="vídeo da série básico avançado, episódio dezessete" width="933" height="525" src="https://www.youtube.com/embed/cBugOOd-foc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Heroku...

Para começar, iremos [criar uma conta no Heroku](https://dashboard.heroku.com/).

> Heroku é uma plataforma em nuvem como um serviço que suporta várias linguagens de programação.

O processo para criar a conta é bem simples, basta colocar os dados que o site pede, nada muito complicado.

Fazendo isso basta logar na conta e clicar em "New" -> "Create New App". Em seguida basta dar o nome e clicar em "Create App".

Vamos utilizar o Github para fazer a conexão com o nosso Heroku, então para isso precisamos selecionar o Github dentro de "Deplyment method". 

Agora deixamos essa página de lado por um momento, visto que o Heroku usa o repositório do Github para subir o projeto. Então para isso, precisamos de subir o nosso projeto de nossa API para o Github. Como já aprendemos no [post de Git e Github](https://oladev.com.br/basico-ao-avancado-s01e07/) não irei explicar minunciosamente aqui, mas no vídeo faço o passo a passo.



## Subindo API no Github...

Vamos criar um repositório no Github e nomeá-lo como quisermos. Em seguida entraremos no nosso projeto no VS Code e vamos criar um arquivo na raiz chamado: ".gitignore" - escrevam exatamente como está dentro das aspas, incluindo o ponto.

 Dentro do .gitignore vamos escrever:

```gitattributes
/node_modules
.env
```

E vamos salvar.

Fazendo isso podemos subir nossos arquivos pro repositório criado no Github com essa sequência de comandos:



```
git init
git add .
git commit -m "Nossa API ZapTalk"
git branch -M main
git remote add origin <SEU VALOR DO BOTÃO HTTPS>
git push -u origin main
```

Ai é só dar refresh no Github e ver se o repositório ficou povoado.

## Voltando ao Heroku...

Voltando a página em que paramos, iremos escrever o nome do nosso repositório do Github em "Search for a repository to connect to". Assim que clicar em "Search" irá aparecer ele, daí é so conectar. 

Em seguida basta clicar em "Enable Automatic Deploy" e então em "Deploy Branch"

## Variaveis ambiente no Heroku...

Como vocês podem notar, acabamos bloqueando o arquivo .env de subir pro Github, visto que ele continha informações sensíveis da nossa aplicação. Nesse caso precisamos dizer ao Heroku esses valores. Para fazer isso basta irmos em "Settings" na parte de cima do site e logo quando clicar, basta descer um pouco que terá um botão escrito "Reveal Config Vars". Então irá aparecer dois inputs, um chamado key, o outro value.

No nosso .env iremos pegar esses valores

- Em key teremos "CONNECTION_MONGO" - caso vocês tenham nomeado igual a mim.

- Em value colaremos toda aquela chave que teremos após o igual do "CONNECTION_MONGO"

Fazendo isso basta clicar em "Add". Para vermos tudo funcionar basta irmos ao topo e clicarmos em "Open App", assim iremos ter nossa API no ar rodando perfeitamente.



## Insomnia...

Se lembrem de alterar o valor da url do Insomia para sua nova URL. Lembram que anteriormente estava com localhost:xxxx/ ?

Basta agora alterar para o novo valor, caso queiram testar se a API esta funcionando bem. Irei deixar o link da API para vocês, mas recomendo que tenham feito ela junto ao longa dos posts, afinal ela está igualzinha, sem nenhum tipo de alteração: 

- [API no ar](https://oladev-api.herokuapp.com/view)

Vale lembrar que o único tipo de rota possível de se acessar em um navegador, são as rotas get, por isso conseguiremos ver nossa rota view. Para criar mais objetos na nossa API precisaremos utilizar o Insomnia - pelo menos por enquanto. Em breve aprenderemos como criar nossos "posts" do ZapTalk sem utilizar o Insomnia.

## Por hoje...

Isso é tudo, por hoje! Mas já temos 80% da funcionalidade de posts funcionando. No próximo post iremos conectar nossa API no nosso front-end, deixando nossos posts do ZapTalk dinâmicos! Espero que tenham gostado, forte abraço!