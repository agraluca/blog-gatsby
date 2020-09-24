---
title: Básico ao Avançado S01E05
description: Curso básico ao avançado S01E05
date: 2020-09-17 06:08:18
image: ../assets/img/arrays_5.png
category: JS
background: "#8A1919"
---
# Dando continuidade ao último post...

![Capa curso básico ao avançado: array](../assets/img/arrays_5.png)

Bom hoje falaremos de Arrays. Falta pouco para acabarmos nossa mini série de JavaScript e entrarmos em Node.JS e React.JS! Nesse vídeo aconteceram algumas coisas...

Primeiro que eu falei tudo sem estar gravando, ai tive que regravar. Segundo que me perdi um pouco, ai tive que me virar no editor para corrigir. Mas felizmente deu tudo certo, ufa!

Colocarei o vídeo em que falamos de Array e dois métodos relacionados a ele - push() e splice() - segue vídeo abaixo:

<iframe width="933" height="525" src="https://www.youtube.com/embed/40R-9WpdY-Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## O que é um Array?

De uma forma simples para entendermo podemos dizer que o Array é uma estrutura que armazena uma coleção de elementos. Normalmente anotamos em um array objetos semelhantes, com isso podemos acessa-los posteriormente de uma forma mais fácil.

Como vimos no vídeo, para criar um array basta escrever: 
let nomeDaVariavel = \["valor", "valor1", "valor2", ... , "valorN"]

Vale lembrar que esses valores dentro do array podem ser desde strings, números até objetos. E para acessá-los posteriormente, basta inserir: nomeDaVariavel\[posiçãoDeAcessoDoArray]

> Importante ressaltar que um array possui uma contagem um pouco diferente, já que todo array começa a contagem na posição zero.

Referências: [MDN Web Docs Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array), [W3School Array](https://www.w3schools.com/js/js_arrays.asp), [DevMedia Array](https://www.devmedia.com.br/javascript-arrays/4079)

## Os métodos

Sempre bom nos lembrar que o JavaScript possui uma infinidade de métodos já de fabrica. Nesse caso utilizamos o push() e o splice(), que são muito úteis para adição e tratamento de resultados.

### O push()...

O método push() tem a funcionalidade de adicionarmos a última posição do array (seu último índice) um valor. No vídeo dou o exemplo de adicionar ao array carros - que continha três carros - um outro carro. 

Referência: [MDN Web Docs push](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [W3School push](https://www.w3schools.com/jsref/jsref_push.asp)

### O splice()...

O método splice() funciona de forma oposta. Ele serve para excluirmos itens a partir de uma certa posição (index). Vale notar que o splice() recebe dois parâmetros: .splice(a, b). O primeiro parâmetro (a) recebe o valor a partir do qual começaremos a excluir itens, já o segundo parâmetro (b) são quantos itens iremos excluir a partir daquele valor pré-escolhido. Então se quisermos excluir o primeiro item de um array, basta passar: nomeDaVariavel.splice(0, 1). Uma coisa que não falo no vídeo é  a possibilidade de um terceiro parâmetro, que seria o último. Esse último parâmetro é opcional e serve para adicionar um item no local do removido, podendo inclusive ser mais de um valor.

Referência: [MDN Web Docs splice](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), [W3School splice](https://www.w3schools.com/jsref/jsref_splice.asp)

## Como sempre...

Deixarei o código que utilizamos na aula logo abaixo - dessa vez com comentários para organizar melhor. Abram no [CodePen](https://codepen.io/pen/) e sigam a aula gravada, se for necessário utilizem o código:

```javascript
let carro = "Tesla Model 3"
let carro1 = "Tesla Model S"
let carro2 = "Tesla Model X"
let preçoCarro = 529000
let preçoCarro1 = 750000
let preçoCarro2 = 820000

// Array dos carros
let carros = ["Tesla Model 3", "Tesla Model S","Tesla Model X"]
console.log(carros)
//Array dos preços
let precos = [529000, 750000, 820000 ]
console.log(precos)
//Posiçao do array começa em 0...
console.log(carros, precos)
console.log(carros[2], precos[2])

//Array do objeto formado por carro + preço
let tesla = [{carro:"Tesla Model 3", preco:529000},
             {carro:"Tesla Model S", preco:750000},
             {carro:"Tesla Model X", preco:820000},
            ]
console.log(tesla[2].preco)



//Metodo push("valor") - adciona na ultima posição
carros.push("Audi A3")
console.log(carros)


//Método splice(a, b) - remove b itens apartir da posição a
carros.splice(2, 1)
console.log(carros)
```

## Por hoje é isso...

Espero que tenham curtido esse post! Treinem bastante, por que esse assunto de Array é muito importante em programação. Qualquer dúvida, como sempre, é só mandar aqui em baixo ou em alguma rede social minha. Forte abraço, pessoal!