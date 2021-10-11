# Menor múltiplo duodígito

Desenvolvimento de uma aplicação fullstack que permita descobrir o menor número múltiplo do valor dado `X`, `X` maior que 100, que é duodígito, ou seja, é composto por até dois dígitos diferentes.

## Requisitos

O projeto é dividido em duas partes, o `frontend` e o `backend`, cada um em seu diretório, embora, se o projeto fosse mais complexo seria interessante separar em dois repositórios diferentes, mas desta forma simplifca a execução local de ambos.

Para construção do `frontend` foi utilizado o framework `React` que permite a construção de Single Page Applications para  a web, que permite a experiência fluída do usuário não ficar carregando diversas páginas, caso fossemos construir apenas com HTML e CSS, por exemplo. Como linguagem de programção teriamos duas escolhas, ou Javascript, ou Typescript, optou-se pela última já que ela é mais legível que a primeira com a utilização de tipagem na linguagem.

Para construção do `backend` utilizamos o framework `Springboot` que permite a construção de webservers de maneira rápida e ágil com Java. A maneira para adicionar novos endpoints e dados é modelar o dado em uma classe e criar um controlador para ele que permitirá expor endpoints para acesso a esses dados. O framework também conta com uma série de outras bibliotecas que auxiliam na integração com banco de dados e outras ferramentas.

Desta forma, como requisitos para executar a aplicação temos:

- Java >= 11.0: necessário para instalar spring boot e executar o backend.
- Node.js >= 14.17.0: ecossistema que permite execução de javascript/typescript fora de browsers e utilizado para criação da aplicação frontend com React.

## Execução

### Localmente

Para executar o projeto localmente, precisaremos de dois terminais. No primeiro acessamos o diretório `backend` e executamos o comando `./gradlew bootRun`, isto irá iniciar um novo webserver na porta `8080` e podemos acessar/testar isso utilizando o comando `curl http://localhost:8080/duodigit?number=123` que nos retornará uma resposta. Agora, devemos executar a parte responsável pelo frontend, basta acessar o diretório `frontend` no outro terminal, e executar o comando `yarn start`, ou `npm start` se estiver utilizanod `npm`, um navegador deve abrir e o frontend deve ser acessível pelo endereço `http://localhost:3000`.

Também é possível utilizar o script que executa os dois processos juntos, `./scripts/run.sh`.
