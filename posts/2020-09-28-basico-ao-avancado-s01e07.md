---
title: Básico ao Avançado S01E07
description: Curso básico ao avançado S01E07
date: 2020-09-28 07:35:18
image: ../assets/img/gitegithub.jpg
category: GIT
background: "#9B3408"
---
# Olá dev!

![Capa do curso básico ao avançado mostrando o que aprenderemos: git e github](../assets/img/gitegithub.jpg)

Tudo bem com vocês? Então, na aula de hoje vamos aprender o basicão de Git e Github. Essencialmente, vamos aprender a colocar o site que criamos com o uso do fetch(), da [última aula](https://oladev.com.br/basico-ao-avancado-s01e06/) da série básico ao avançado, no nosso novo repositório do Github.

Segue vídeo abaixo:

<iframe title="video da série básico avançado, episódio sete" width="933" height="525" src="https://www.youtube.com/embed/gyY3CcIAK20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Primeiramente...

Mas Luca, o que é esse tal de Git?

> O Git é um sistema de controle de versões gratuito e open source
> Imagina a seguinte situação: 

1- Suponha que você esteja trabalhando numa empresa na qual vários funcionário trabalham no mesmo projeto que você. Como poderia tanta gente alterar coisas no mesmo arquivo sem criar nenhum tipo de problema? 

2- Ou então, suponha que você queira ajudar alguma amigo que tenha algum problema no código dele e você como tem mais experiência se predispôs a ver o código dele para achar o erro. Para isso você ira precisar instalar os arquivos na sua máquina para fazer os teste.

3- Ou por fim, você simplesmente quer acessar algum projeto por ai e mexer nele por questões de aprendizado.

Bom, é ai que o Git entra. Com o Git criamos uma espécie de árvore que podemos olhar/resolver/alterar qualquer tipo de feito no seu código. Dessa forma o Git cria versões que podem ser acessadas posteriormente, evitando qualquer tipo de dor de cabeça com arquivos perdidos, download de arquivos de códigos alheios e trabalho em equipe. O Git é basicamente um histórico da sua aplicação.

## Github...

Sim, o Github é diferente do Git! Sem o Git o Github não existiria. 
Mas ai fica aquela dúvida... o que é o Github?

> GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git.

Caso vocês se lembrem, foi no Github que eu passei o link para diversas API's gratuitas e open sources que pessoas criaram e disponibilizaram para o mundo. No Github podemos ver, baixar e até editar códigos pelo mundo inteiro. Obviamente que alterações no código devem ser aprovadas pelo dono do repositório.

## Um passo a passo

Para facilitar a vida de vocês deixarei um passo a passo geralzão do que precisamos para colocar qualquer arquivo versionado no Git, no nosso repositório do Github:


1- Baixar o [Git](https://git-scm.com/)

2- Criar uma conta no [Github](https://github.com/join)

3- Criar um [repositório no Github](https://github.com/new)

3- Configurar as tags globais de email e nome (esse passo só é necessário ser feito uma vez):

3.1- git config --global user.name "Seu nome"

3.2- git config --global user.email "Seu email"

4- No terminal, dentro da pasta do seu projeto:

4.1- git init (inicializa repo git)

4.2- git add -A (adciona alterações)

4.3- git commit -m "texto lembrete" (persiste dados no histórico de todas as adições feitas com o git add)

4.4- git branch -M master (cria nova branch)

4.5- git remote add origin "o dominio https informado no seu github" - sem aspas -  (lista caminho do servidor, onde serão enviadas nossas alterações)

4.6- git push origin master (envia nossa branch para o servidor, no nosso caso nossa branch se chama: master)

## Para auxiliar...

Irei deixar o link do repositório da aplicação - igual ao ensinado no video. Para caso queiram ver como ficou:

[Repositório feito no vídeo](https://github.com/agraluca/minhaAplicacao)

## Então é isso pessoal...

Espero que tenham gostado e aprendido um pouco! Vejam o vídeo e sigam o passo a passo que tudo irá funcionar direitinho. Qualquer dúvida, mandem para mim que irei auxiliar vocês =)
Forte abraço!