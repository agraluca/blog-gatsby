---
title: Básico ao Avançado S01E14
description: Curso básico ao avançado S01E14
date: 2020-10-14 02:46:19
image: ../assets/img/react_pt1.jpg
category: JS
background: "#8A1919"
---
# Olá dev!

![capa do curso básico ao avançado, episódio treze: React.JS parte um](../assets/img/react_pt1.jpg)

Tudo bem com vocês? Hoje finalmente entraremos na parte de React.JS. Iremos aprender a fazer uma parte muito importante de uma rede social: as postagens! 

Nossa rede social se chamará ZapTalk, nome nada criativo... eu sei. Mas o objetivo aqui é aprendermos coisas muito importantes. Iremos aprender sobre JSX, componentes, estados, hooks, fetch com plugins, integração com nossa API e muito mais. Mas para isso precisamos primeiro aprender a como montar uma estrutura com React.JS. Segue vídeo abaixo:

<iframe title="vídeo da série básico avançado, episódio catorze" width="933" height="525" src="https://www.youtube.com/embed/xccTjfoOYLU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.

Irei deixar uma lista de sites famosos que utilizam React: 

- Netflix

- Instagram

- Facebook

- Tesla

- Airbnb

Entre vários outros. Podemos notar que é uma tecnologia que tem um futuro incrível pela frente - na verdade já tem!

## Nosso template...

Bom para facilitar nossa vida e não termos que fazer instalações manuais do babel e uma série de pacotes iremos utilizar o Create React App - o famoso CRA. Com ele podemos utilizar o React sem ter que fazer todas essas configurações chatas. Ele já nos da um template pré-pronto, porém, esse template não possui nenhum conteúdo, isso quem construirá seremos nós.

Site do CRA: [Create React App website](https://create-react-app.dev/docs/getting-started)

### Para começar...

Precisamos abrir nosso cmd e ir na pasta que nos agrade mais. Nessa pasta iremos criar nossa aplicação começando com o esse comando:

```javascript
npx create-react-app zaptalk
```

Em seguida iremos esperar bons longos minutos... (por volta de 5 minutos)

Quando tudo acabar de carregar iremos mudar para a pasta criada:

```java
cd zaptalk
```

E então abrir no VS Code com o comando:

```javascript
code .
```

### Excluindo arquivos....

Assim que o VS Code abrir iremos fazer algumas limpezas, visto que não precisaremos de todos os  arquivos que o CRA cria. A lista de arquivos que iremos excluir é a seguinte:

- Dentro da pasta "public" iremos apagar todos os arquivos, menos o "index.html".

- Dentro da pasta "src" iremos apagar todos os arquivos, menos o "App.js" e o "index.js".

Ficando assim:

![Imagem mostrando os arquivos que ficaram - como descrito logo acima.](../assets/img/clean_workspace.png)

Agora precisamos retirar as importações que estavam sendo feitas anteriormente, porém, não existentes, visto que apagamos diversos arquivos. Vamos começar pelo index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>ZapTalk</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

```

Agora vamos limpar o index.js:

```javascript
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

```

Por fim precisamos limpar o App.js:

```javascript
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Funcionou!!</h1>
    </div>
  );
}

export default App;

```

Com tudo isso em ordem, podemos dar um "npm start" e ver como nossa página está. Ela irá abrir no localhost:3000

Se quando ela abrir estiver escrito "Funcionou!!", então tudo deu certo! 



## Finalizando...

Nas nossas próximas aulas iremos abordar todos os assuntos que citei no ínicio desse post. Espero que tenham gostado e que estejam ansiosos para ver um pedaço da nossa rede social tomando vida! Forte abraço =)