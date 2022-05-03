![Finanças-Pessoas-1](https://user-images.githubusercontent.com/70352508/166411144-9bd82aff-e690-4fa5-8ad0-0be775373812.png)


<h1 align="center">
  <a align="center" href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /></a>
  <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" /></a>
  <a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/Vscode-2496ED?style=for-the-badge&logo=visualstudio&logoColor=blue&color=white"></a>
</h1>

## Descrição do Projeto
Olá, este é um projeto de controle financeiro proposta pela Itez Innovation e desenvolvido por mim. Esta api segue o padrão REST. Todos os requisitos foram trabalhados.

### Links úteis.
[Documentação da API - Controle financeiro](https://documenter.getpostman.com/view/18168778/UyrHfYyP) <br>
[Imagem Dockerfile da aplicação](https://hub.docker.com/r/mathlopes/dockernodeitez)

## Como usar a API

### Pré-requisitos 
> Para usar esta API é preciso instalar as seguintes ferramentas:
- [Node.js](https://nodejs.org/en/)
- [Postgre](https://www.postgresql.org/)
> Para editar o código eu recomendo: 
- [VSCode](https://code.visualstudio.com/)
> Para testar as rotas você pode usar:
- [Postman](https://www.postman.com)


### Rodando o Back End (servidor)

```bash
# Clone este repositório
 git clone https://github.com/MathLopes1/financial-control.git

# Acesse a pasta do projeto 
 cd financial_control

# crie um arquivo .env seguindo o modelo do arquivo .env.exemplo e preencha os campos.

# Instale as dependências
 npm i

# Faça o build da aplicação para JavaScript
npm rum build
           
# Execute a aplicação em modo de Produção
npm run start

# Execute a aplicação em modo de desenvolvimento
npm run dev:server

# Execute os testes            
npm run test            
            
# O servidor iniciará na porta: 3000 
```


### 📝 Rotas do projeto:
> Rotas de usuario: `localhost:3000/api/v1/user`

> Rota de login: `localhost:3000/api/v1/user/login`

> Rotas de ganhos: `localhost:3000/api/v1/gain`

> Rotas de gastos: `localhost:3000/api/v1/spend`

> Rotas de conta: `localhost:3000/api/v1/account`

### 👨‍💼 ROTAS DE USUARIO
### REQUEST - (POST)
> Para cadastrar usuarios.

> POST - `localhost:3000/api/v1/user`

Exemplo de body:
```json
{
    "email": "matheuslop@gmail.com",
    "senha": "040236",
    "habilitado": "sim"
}
```


### REQUEST - (POST)

> Para criar o token de autenticação

> POST - `localhost:3000/api/v1/user/login`

Exemplo de query:
```json

{
    "email": "matheuslop@gmail.com",
    "senha": "040236"
}

```

### REQUEST - (GET)

> Para fazer logout

> POST - `localhost:3000/api/v1/user/logout`


### 👩‍💻 ROTAS DE GANHOS
### REQUEST - (POST) 
> Para cadastrar ganhos

> POST - ` localhost:3000/api/v1/gain

Exemplo de body:
```json

{
    "total_ganhos": 10000.80
}

```


### REQUEST - (GET) 
> Para listar todos os ganhos

> GET - `localhost:3000/api/v1/gain`


### REQUEST - (PUT)
> Para atualizar um ganho

> PUT - `localhost:3000/api/v1/user/:id

Exemplo de body:
```json
{
    "total_ganhos": 800.00
}
```


### REQUEST - (DELETE)

> Para deletar um usuario

> DELETE - `localhost:3000/api/v1/user:id`

### 👨‍💼 ROTA DE GASTOS
### REQUEST - (POST)
> Para cadastrar um gastos.

> POST - ` localhost:3000/api/v1/spend`

Exemplo de body:
```json
{
    "entretenimento": 1000.00,
    "alimentacao": 80.00,
    "educacao": 56.95,
    "saude": 102.10,
    "transporte": 80.90
}
```
### REQUEST - (GET) 
> Para listar todos os gastos.

> GET - `localhost:3000/api/v1/spend`

### REQUEST - (PUT)
> Para atualizar um gasto.

> PUT - `localhost:3000/api/v1/spend/:id`

Exemplo de body:
```json
{
    "entretenimento": 1000.00,
    "alimentacao": 80.00,
}
```

### REQUEST - (DELETE)
> Para deletar um gasto.

> DELETE - `localhost:3000/api/v1/spend/:id`

### 💼 ROTA DE CONTA
### REQUEST - (POST)
> Para cadastrar uma conta.

> POST - ` localhost:3000/api/v1/account`

Exemplo de body:
```json
{
    "nome": "Matheus Lopes",
    "cpf": "30117377031",
    "data_nascimento": "07/02/2000",
    "usuario_id": "6ec6c26f-e58f-4571-ac73-81df30b11222",
    "ganhos_id": "27cd2d23-f374-4943-84f7-2687b7229ab4",
    "gastos_id": "70e2379c-4d07-445b-bd04-87cc15cf2e64"
}
```
### REQUEST - (GET) 
> Para listar todas as contas.

> GET - `localhost:3000/api/v1/account`
Exemplo de retorno:
```json
[
  {
    "id": "bef8d57b-a66c-49fc-a09e-c32ba4866967",
    "nome": "Matheus Lopes",
    "cpf": "30117377031",
    "data_nascimento": "07/02/2000",
    "usuario_id": "6ec6c26f-e58f-4571-ac73-81df30b11222",
    "ganhos_id": "27cd2d23-f374-4943-84f7-2687b7229ab4",
    "gastos_id": "70e2379c-4d07-445b-bd04-87cc15cf2e64",
    "created_at": "2022-05-03T17:52:13.464Z"
  }
]
```
### REQUEST - (GET) 
> Para gerar um extrato financeiro de uma conta.

> GET - `localhost:3000/api/v1/account/extract/:id`
Exemplo de retorno:
```json
{
  "FinancialStatementStatement": {
    "id": "64fc985f-7648-4d3a-8ff9-b41daf817ead",
    "nome": "Matheus Lopes",
    "cpf": "30117377031",
    "data_nascimento": "07/02/2000",
    "user": {
      "id": "9fc1436d-29cd-4865-abaf-23b37fd2ec13",
      "email": "matheuslopesdasilva@gmail.com",
      "senha": "$2b$08$6Ejr9NTx0eAG/j9eU1FxaOGaMoW8rlyQds0TG7Aoc2/IyvDLCwwtm",
      "habilitado": "sim"
    },
    "gain": {
      "id": "27cd2d23-f374-4943-84f7-2687b7229ab4",
      "total_ganhos": 500.9
    },
    "spend": {
      "id": "70e2379c-4d07-445b-bd04-87cc15cf2e64",
      "entretenimento": 489.55,
      "alimentacao": 78.89,
      "educacao": 189.963,
      "saude": 456.96,
      "transporte": 696.48
    },
    "Total": -1410.9430000000002
  }
}
```

### REQUEST - (PUT)
> Para atualizar uma conta.

> PUT - `localhost:3000/api/v1/account/:id`

Exemplo de body:
```json
{
   "nome": "Matheus Lopes da Silva",
}
```

### REQUEST - (DELETE)
> Para deletar uma conta.

> DELETE - `localhost:3000/api/v1/account/:id`
  
### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Postman](https://pt-br.reactjs.org/)
- [Postgre](https://www.postgresql.org/)
- [TypeOrm](https://typeorm.io/)
- [express](http://expressjs.com/)

## 👨‍💻 Autor

<div align=left>

 <table>
  <tr align=center>
    <th><strong> 💻Matheus Lopes </strong></th>
  </tr>
   <td>
      <a href="https://github.com/MathLopes1">
        <img width="168" height="140" src="https://avatars.githubusercontent.com/u/70352508?v=4" > <p align="left">
</p></a>
    <p align="center">Developer</p>
    </td>
  </tr>
</table>
</div>

<div align=left>
 
<br>
                 
---
 
## 📝 LICENÇA

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.
 