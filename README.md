# redis-dba

Projeto final da cadeira de Banco de dados Avançado realizada no curso de Ciência da Computação na Universidade Federal de Pelotas. Buscamos realizar um estudo de caso com o banco NoSQL Redis, utilizando o mesmo como message broker em um sistema de disparo de e-mails em lote.

## Tecnologias utilizadas

- [Redis](https://redis.io/)
- [NodeJs](https://nodejs.org/)
  - [Bull](https://github.com/OptimalBits/bull)
  - [AWS.SES](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#constructor-property)

## Como executar

1. Clone o repositório e entre na pasta
2. Instale os pacotes utilizando o comando `npm install`
3. Crie um arquivo `.env` na raiz do projeto e insira suas credencias. Utilize o arquivo `.env.example` como base.
4. Rode o projeto com o comando `npm start`

## Contribuicoes

- Esse projeto possui uma estrutura front-end que integra com nosso servico. A aplicacao pode ser encontrada no seguinte [link](https://github.com/Fernanda-Kipper/membership-frontend).

## Roadmap 🚧️

- [] Migrar o serviço de envio de e-mail da AWS para o <mark>Nodemailer</mark> - [Nodemailer](https://nodemailer.com/)

### Install Nodemailer

```bash
npm install nodemailer
```
