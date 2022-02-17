<h1>Desafio HVEX - Consumindo a API do Github</h1>

<p>A aplicação tem como funcionalidade a pesquisa de usuários do Github através do seu Username ou E-mail, mostrando os seus respectivos dados.</p>
<p>A aplicação conta também com uma tela de login que faz a validação de um usuário "pré-cadastrado" através do JSON-Server.</p>
<p>A aplicação foi desenvolvida como parte de processo seletivo para vaga de Dev Front-end Jr.</p>

<br />

<h2>⚙️ Funcionalidades da Aplicação</h2>

<ul>
  <li>Validação de usuário já cadastrado previamente para logar na aplicação</li>
  <li>Pesquisa de usuários pelo seu nome/email através da API do Github</li>
</ul>

<br />

<h2>🔧 Instruções para executar a Aplicação</h2>

<br />

<p>Primeiramente você precisa ter VS Code instalado em sua máquina, juntamente do Node.js.</p>
<p>Caso ainda não os tenha instalado, você pode fazer o download através dos links abaixo:</p>

* [Visual Studio Code](https://code.visualstudio.com/download)
* [Node.js](https://nodejs.org/en/download/)

Após isso, podemos seguir para o clone/execução da aplicação!

<br />

1° - Faça o clone do repositório a partir do seu terminal:
```bash
  git clone git@github.com:JVMMiguel/desafio_hvex.git
```

2° - Acesse a pasta onde foi feito clone do repositório e instale as dependencias necessárias:
```bash
  cd pasta_com_o_repositorio && yarn
```

3º - Após instaladas todas as dependências, agora você já pode executar a aplicação através do comando: 
```bash
  yarn dev
```

4º - Para que a aplicação possa acessar a "Fake API" e fazer a validação de e-mail e senha, você deve executar o json-server, através do comando a seguir: 
```bash
  yarn server
```

<br />

<h2>🛠️ Bibliotecas/Linguagens</h2>

 * [React](https://pt-br.reactjs.org/) - O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web;
 * [Next.js](https://nextjs.org/) - Next.js é um framework React com foco em produção e eficiência criado e mantido pela equipe da Vercel, o Nextjs busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript, pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar seu desenvolvimento fornecendo uma estrutura completa para você iniciar seu projeto;
 * [Typescript](https://www.typescriptlang.org/) - O Typescript é uma linguagem de código aberto desenvolvida pela Microsoft que foi construída em cima do Javascript, que é muito difundido atualmente. Esse “superset” foi criado para adicionar recursos de tipagem estáticas à linguagem original;
 * [Axios](https://axios-http.com/docs/intro) - O Axios é um cliente HTTP baseado-em-promessas para o node.js e para o navegador. É isomórfico (= pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo http, enquanto no lado do cliente (navegador) usa XMLHttpRequests;
 * [JSON-Server](https://www.npmjs.com/package/json-server) - O JSON-Server é um pacote npm que você pode  usar para criar um web-service REST JSON simulando uma API.
 * [SASS](https://sass-lang.com/) - O SASS é uma linguagem de extensão do CSS e a sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas. O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente.
