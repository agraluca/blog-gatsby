---
title: Vamos mudar tudo?
description: Brainstorm de ideias
date: 2020-09-21 07:31:52
image: ../assets/img/logoOg.png
category: Geral
background: "#3D5145"
---
# No post de hoje...

![imagem da logo](../assets/img/logoOg.png)

Iai pessoal, como vocês estão? Então, como podem notar, finalmente temos um domínio descente - Wuhul! 

Bom primeiro quero explicar o por que dessa ideia OlaDev... Eu queria um nome fácil de se lembrar e que tivesse relação com a área de programação, então pensei em colocar algo relacionado a desenvolvimento. Pórem desenvolvimento é uma palavra grande, dai entra sua abreviação: dev. 

Invejosos irão falar que só adicionei um ola na frente e foi isso kkkkk. Foi quase isso... Pra me safar disso bolei um plano incrível: dar significado para o ola. Ai é que entra meu nome, Luca Agra. Então se encaixarmos um "o" na frente, fica O Luca Agra dev... Não foi a melhor das ideias, mas tá ai kkkkk. 

Provavelmente irão perguntar o motivo de simplesmente não colocar meu nome. E o motivo é devido a complexidade e o tamanho de escrever meu nome, desse jeito que está acabou ficando mais fácil =) .

## Hoje não terá post da continuação da série...

Mas iremos abordar temas importantes!

Primeiro queria pedir pra vocês ideias do que acrescentar no site. Sabe aquela funcionalidade que vocês procuram num site e fica faltando? Ou até mesmo algo que tem aqui no site mas de alguma forma não funciona bem.

Eu também estou procurando uma palheta de cores que fique agradável para os olhos, estou fazendo diversos testes. Mas caso alguém queira opinar irei ensinar como estou fazendo

### O site...

Bom o meu site foi construindo com [styled components](https://styled-components.com/). Que nada mais é que um CSS escrito em um arquivo JS.

Mas para poupar tempo, invés de eu atribuir a cor para cada componente, eu criei um arquivo global e na raiz dele eu criei variáveis. Dessa forma, caso eu queira mudar a cor de algo em específico, como a cor do fundo, do texto ou até mesmo de alguma borda, basta eu alterar nesse arquivo global. Irei mostrar um print para vocês:

![print das minhas variaveis globais](../assets/img/globacss.jpg)

Dessa forma, caso eu queira mudar a cor do fundo, basta eu alterar seu valor nesse arquivo e então todas as tags, classes e ids que tiverem a variável com esse nome irá mudar.

Caso vocês nunca tenham visto sobre [variáveis no CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties) irei dar uma breve explicação:

1- Basicamente basta criarmos um arquivo que tenha acesso a essas informações, como no exemplo dado acima

2- Então precisamos importar esse arquivo

3- Usar ele em alguma propriedade que precisemos. Como por exemplo, se quisermos alterar o background de algum lugar basta:

```css
.mudarBackground {
  background: var(--background)
}
/* Outros exemplos */
.mudarCor {
  color: var(--texts)
}

img {
 border: var(--border) 
}
```

> No exemplo dado a cima, utilizo como nome da variável: background. Pois o exemplo foi baseado na imagem do como é no blog. A única regra importante é que o nome dessa variável seja igual no seu arquivo de estilos.

## Agora que sabem como é fácil...

É só utilizar um site de [gerar palheta de cores](https://coolors.co/generate), que basicamente cada vez que se clica espaço é gerado novas cores. Podendo inclusive travar as cores que tenham gostado e até alterar seus tons para mais escuros ou mais claros. Para por fim, anotar os valores indicados, ou até mesmo enviar o link da url (sim, o site mantem a paleta de cores que aparece na sua tela somente com a url) que irei ter acesso a essas informações. Então caso vocês queiram opinar na mudança da site, fiquem a vontade! 

Mandem aqui em baixo o que acharam do domínio, além da paleta de cores escolhida por vocês! A única regra é que ela tenha um tom escuro - e que elas combinem rs. A pessoa que escolher as paletas de cores mais legais irão ser citadas aqui =)

## Eu nunca...

Engraçado, eu reparei que nunca falei sobre os comentários aqui em baixo... Eu utilizo o Disqus para podermos nos comunicar aqui no blog. Ele é fácil de integrar com o site, porém ele requer uma conta, mas podemos utilizar o próprio Facebook para efetuar o login no Disqus. Dai basta depois confirmar no e-mail (olhem inclusive no spam, as vezes aparece lá) que assim poderão escrever aqui nos comentários.

## Isso é tudo!

Então é isso pessoal, como prometido, estou cumprindo o cronograma de postagens toda segunda, quarta e sexta. Continuem acompanhando que em breve verão novidades! Forte abraço!