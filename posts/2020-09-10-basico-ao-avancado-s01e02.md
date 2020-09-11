---
title: Básico ao Avançado S01E02
description: Curso básico ao avançado S01E02
date: 2020-09-10 05:48:26
image: ../assets/img/love2learn.jpg
category: CSS
background: "#C2AFF0"
---
# Hoje daremos continuidade...

![Código em CSS](../assets/img/css_blog.jpg)

Bom, desde o último post, tive a ótima ideia de manter um certo padrão de postagem. Farei postagens no blog toda segunda, quarta e sexta. Obviamente poderei colocar posts outros dias, mas sempre irá ter esses três.

## Chega de enrolação...

> Para começar a postagem de hoje irei passar o arquivo PowerPoint da aula de hoje, mesmo esquema do último post. Nele eu falo a respeito de conceitos básicos de CSS, o que é, suas propriedades e como o integrar.

<iframe src="https://onedrive.live.com/embed?cid=B3E072143D9FE0F1&amp;resid=B3E072143D9FE0F1%21586&amp;authkey=AGzTWt4k_RdTzeU&amp;em=2&amp;wdAr=1.7777777777777777" width="962px" height="565px" frameborder="0">Este é um apresentação do <a target="_blank" href="https://office.com">Microsoft Office</a> incorporado, da plataforma <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>

## Não podemos esquecer...

Como falei no último slide, deixarei aqui o código da nossa humilde aplicação. Ta feio? Tá sim! Mas o objetivo aqui não é fazer nada elaborado e sim entendermos o básico do CSS:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#header-content {
  background: #f79f79;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

#header-content h3 {
  color: #fff;
  font-weight: bold;
}

ul {
  display: flex;
}

ul a {
  text-decoration: none;
  color: #fff;
}

ul a:hover {
  text-decoration: none;
  color: #fafaf5;
}

ul a li {
  margin: 0 1rem;
  list-style: none;
}

.container {
  display: flex;
  justify-content: space-around;
}

section {
  display: flex;
  width: 70%;
}

section img {
  width: 100%;
}

.sideMenu {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cce3de;
  width: 30%;
  padding: 3rem;
}

main {
  background: #fafaf5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
}

main h1 {
  margin: 3rem;
  text-transform: uppercase;
}

main p {
  font-size: 1.4rem;
  letter-spacing: 0.08rem;
  line-height: 1.8rem;
}

footer {
  color: #fff;
  background: #a4c3b2;
  padding: 3rem;
  display: flex;
  justify-content: space-around;
}

footer a {
  font-size: 1.3rem;
}

footer a:hover {
  color: #fafaf5;
}
```

![Nosso site com CSS](../assets/img/sitecomcss.jpg)

## Eita zorra...

Calma gente, é grande e tem um monte de coisa que não tem no slide, mas vamos entender tudinho. Primeiro quero que vocês reparem logo de cara em uma coisa: Todos os códigos estão escritos na mesma ordem que as tags do HTML estão, isso ajuda MUITO para quem vê o código, seja num trabalho em equipe, ou seja para você mesmo quando ler no futuro.

Notem que já começamos o código com um "\*{}". Isso significa que estamos dando um reset logo de cara no site. Fazemos isso por que os navegadores tem umas configurações de fábrica que já dão uns espaçamentos no nosso site. Ai para resolver isso pegamos tudo (\*) e zeramos o margin, padding e atribuímos ao box-sizing esse border box: 

> As propriedades de largura (width) e de altura (height) incluem o tamanho padding size e a propriedade border, mas não incluem a propriedade margin.

### O header:

Agora vamos aprender uma outra coisa. O CSS tem esse nome por que ele tem uma funcionalidade muito legal. Ele consegue "atingir" as propriedades em uma forma de cascata.
No código vemos isso pela primeira vez no " #header-content h3 {} ", basicamente nós estamos buscando todos os h3 que estão dentro do #header-content. Fazemos isso ao longo do código com as ul, a, li... e por ai vai. Entendendo o conceito fica fácil. 

Notem que todo "a" dentro de toda "ul" aplicamos uma propriedade chamada: 
text-decoration: none; Isso faz com que a âncora perca o underline que vem por padrão.

Já que falamos do "a" vamos explicar o que é esse hover. Sabem quando passamos o mouse em um link e ele faz alguma coisa? Uma cor que muda, um traço que aparece por baixo, um fundo que muda, a palavra se entorta, enfim, são muitas possibilidades. O hover é responsável por isso, quando vocês verem um ":algumaCoisa" saibam que isso se chama seletor. Ele normalmente busca alguma peculiaridade em alguma propriedade.

> Leiam sobre os seletores :  [W3School Selectors](https://www.w3schools.com/cssref/css_selectors.asp)

Notem também que todo "li" dentro de todo "a" dentro de toda "ul" aplicamos uma propriedade chamada: "list-style: none;". Isso faz com que a lista perca a bolinha que vem por padrão.

### A capa:

Para conseguirmos o efeito de colocar a imagem + menu lateral um do lado do outro tivemos que utilizar o Flexbox de novo. Chamamos aquela classe container que estava na nossa "div". E dentro dessa "div" tínhamos o "aside" e o "section". Dando a propriedade "display:flex;" e "justify-content: space-around;" colocamos um ao lado do outro. Dai foi só estipular cores e o tamanho da largura que cada um ocuparia.

### Os conteúdos:

Uma nova propriedade que aprendemos foi a "flex-direction: column;" que aplicamos diretamente no "main". Por padrão o display flex coloca uma coisa colada na outra. Para podermos fazer uma tag ficar abaixo da outra, usamos essa propriedade.

Dai estilizamos o "h1" dando um "font-size" (tamanho da fonte), e transformamos o "h1" em maiúsculo com o "text-transform: uppercase;". O "p" demos uma espaçada entre cada letra (letter-spacing: 0.08rem;) e atribuímos uma altura para cada palavra(line-height: 1.8rem;)

### O footer:

No footer fizemos o mesmo que já vimos anteriormente, nada novo.

## Enfim...

Espero que tenham gostado! Mandem todas as dúvidas que tiverem. Provavelmente terão um monte! Forte abraço!