---
title: Básico ao Avançado S01E04
description: Curso básico ao avançado S01E04
date: 2020-09-15 06:22:29
image: ../assets/img/thumb1-4.png
category: JS
background: "#8A1919"
---
# Dando continuidade a parte de JavaScript...

![Curso básico ao avançado: Objetos e DOM](../assets/img/thumb1-4.png)

Hoje trouxe uma pequena novidade para nossas postagens. Sempre que eu conseguir irei adicionar um vídeo explicativo sobre o assunto.

> Inclusive comentem ai embaixo se acharam muito ruim e o que posso melhorar.

Hoje falaremos sobre objetos e o início do DOM ( Document Object Model - Modelo de Objeto de Documento ). Segue o vídeo:

<iframe width="933" height="525" src="https://www.youtube.com/embed/jz6qSdSEnSw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Ta bem, mas o que é DOM?

O DOM é como se fosse uma arvore genealógica, onde você possui um grande objeto do seu site, o document. Através dele podemos alterar qualquer coisa do nosso site. Desde título a conteúdos específicos como tags, class e id. Com o JS podemos brincar com o DOM através dos scripts.

## Como sempre...

Iremos abrir o [CodePen](https://codepen.io/pen/) de novo, para ver como tudo funciona.
Irei deixar um exemplo parecido com o que vimos na aula, logo abaixo:

```javascript
let pessoa = {
  nome: "Luca",
  idade: 20,
  altura: 178,
  nacionalidade: "Brasileiro",
  familia: {
    pai: "José",
    mae: "Maria"
  },
  esportes(value) {
    if(value == "S") {
      alert("Gosta de esportes")
    } else {
      alert("Não gosta de esportes")
    }
  }
}

pessoa.esportes("S")
console.log(pessoa)
console.log(pessoa.familia.mae)
console.log(pessoa.familia.pai)
```

Notem que utilizamos o console.log, portanto é preciso abrir o console. Para isso basta apertar f12 ou inspecionar e ir ate console. Iremos ver que o primeiro resultado será o objeto inteiro, com todas as informações dentro dele. Em seguida utilizamos o . para acessar as propriedades dentro deles. Mexam bastante no código, testem possibilidades diferentes!

## Referências...

Irei colocar bastante sites de apoio nesse post, para poderem ver os objetos e as funcionalidades do DOM:

* [MDN Web Docks objetos](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico)
* [W3School DOM ](https://www.w3schools.com/js/js_htmldom.asp)
* [DevMedia DOM](https://www.devmedia.com.br/trabalhando-com-dom-em-javascript/29039)

## Por hoje é isso...

Hoje o post foi mais curtinho, devido ao vídeo e também por não escolher tantos assuntos para serem abordados. Mas  como sempre, espero que aproveitem o máximo do assunto ensinado e caso haja qualquer dúvida é só mandar aqui em baixo ou em alguma rede social minha. 

> Aproveitando o gancho, queria pedir que entrassem no meu canal do [Telegram](https://t.me/lucaagrablog), la anunciarei sobre postagens novas, novidades e muito mais. Em breve também irei colocar o slack de dúvidas para vocês!

Enfim espero que tenham gostado, forte abraço! =)