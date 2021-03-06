<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Teste T??cnico Desenvolvedor FullStack - Mobile

Teste de conhecimento t??cnico para a entrevista na Certsys

O teste consiste na execu????o dos t??picos listados abaixo, sendo obrigat??rios os itens de "Geral, Mobile e Backend", e ser?? levado em considera????o como um diferencial caso execute tamb??m algum item da lista "Pontos extras".

**_Backend_**

- [x] Rota de Listagem de t??nis;
- [x] Rota de comprar t??nis;
- [x] Construir duas tabelas: Product e Order.

**_Geral_**

- [x] GitFlow.

**_Ponto extra_**

- [ ] Clean Architecture;
- [ ] Docker;
- [ ] Desenvolver o backend com Nestjs(prefer??vel) ou Nodejs.

**_Prototipo_**

```text
https://xd.adobe.com/view/805c6555-3e18-4105-98e5-d5486211e920-d50f/
```

**_Observa????o_**

- Todos os pontos [x] s??o obrigat??rios.
- Segue um schema do banco contido no arquivo schema.jsonc.
- As imagens para teste encontra-se na pasta images.

# Challenge Instructions

### Clone this repository

```bash
git clone https://github.com/TheNeoCarvalho/desafio-fullstack-api.git
```

### Change directory

```bash
cd desafio-fullstack-api
```

### Install the dependecies

```bash
yarn
```

or

```bash
npm i
```

### Change file .env-example to .env and modify the environment variables

```bash
POSTGRES_HOST=
POSTGRES_USER=
POSTGRES_PASS=
POSTGRES_DATABASE=
POSTGRES_PORT=
```

### Running the Docker

```bash
docker-compose up -d --build
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

### Documentation on Swagger

```bash
http://localhost:3000/api-docs
```

### Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

### Stay in touch

- Author - [Kamil My??liwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

### License

Nest is [MIT licensed](LICENSE).
