<p align="center">
  <img src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png">
</p>

# Dependências

## Sucrase
Dependência utilizada para fazer com que o node consiga executar
comandos mais novos do JS como por exempplo:

```js
import epxress from 'express';
```

Para configurar o Nodemon com o sucrase será necessário criar um arquivo
nodemon.json utilizando o seguinte formato:

```json
  {
    "execMap": {
      "js": "node -r sucrase/register"
    }
  }
```

Isto faz com que execute o sucrase/register antes de executar os arquivos JS da aplicação.

# Debugger

Para executar em modo debug será necessário adicionar o seguinte script no arquivo package.json:

```json
  "dev:debugger": "nodemon --inspect src/server.js"
```

Para criar o arquivo de configuração de debugger é necessário alterar o script gerado para:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Launch Program",
      "restart": true,
      "protocol": "inspector"
    }
  ]
}

```

# Docker
Instalação do postgreSQL Docker
Interface visual para PostgreSQL **Postbird**.

# Postgre

```terminal
  yarn add pg pg-hstore
```

# ORM - Sequelize
ORM para banco de dados relacionais. (Tabelas Viram models)

```terminal
  yarn add sequelize
  yarn add sequelize-cli -D
```

***TODO*** Adicionar as configurações e Comandos do sequelize

Criar o arquivo .sequelizerc na pasta raiz com a seguinte configuração

 ```javascript
  const { resolve } = require('path');

  module.exports = {
    config: resolve(__dirname, 'src', 'config', 'database.js'),
    'models-path': resolve(__dirname, 'src', 'app', 'models'),
    'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
    'seeds-path': resolve(__dirname, 'src', 'database', 'seeds')
  }
 ```

 Executar o comando no terminal:

  ```terminal
    yarn sequelize db:migrate
    yarn sequelize db:migrate:undo  // Faz rollback da última migration
    yarn sequelize db:migrate:undo:all // Faz o rollback de todas as migrations
  ```

## Migrations

Controle de versão para base de dados.
Cada arquivo contém instruções de criação, alteração ou remoção de tabelas e colunas.
Cada arquivo é uma migration e sua ordenação ocorre por data.

**Cada migration deve realizar ações para uma tabela**.

## Seeds
População da base de dados para desenvolvimento.
Muito utilizados para popular dados para testes.
Executável apenas por código.
**JAMAIS serão utilizados em produção**

# Arquitetura *MVC*

## Model
Armazena a abstração do banco, não possuem responsabilidade da regra de negocio da aplicação

## View
Retorno ao cliente.

## Controller
Ponto de entrada das requisições da aplicação. Podemos incluir grande parte da regra de negocio da aplicação.

O controller sempre terá no **Máximo** cinco métodos.

```js
  class UserController {
    index() {}  //  Listagem de Usuários
    show() {}   //  Exibir um único usuário
    store() {}  //  Cadastrar usuário
    update() {} //  Alterar usuário
    delete() {} //  Remover Usuário
  }
```

# Ferramentas para padrões de código
```shell
  yarn add eslint
  yarn eslint --init
```
Padrão de código *AirBnB*.

## Eslint
Adicionar no vscode em settings.json

```json

  // verifica padrão de código e faz autofix
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    },
  ```

  ### Regras no .eslintrc.js
  ```json
    rules: {
      "prettier/prettir": "error",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "next"}]
    },
  ```


## Prettier

Deixa o código mais elegante.

  ```shell
    yarn add prettier eslint-config-prettier eslint-pllugin-prettier -D
  ```

Adicionar em .eslintrc.js.

  ```json
    extends: ["airbnb-base", "prettier"],
    plugins: ["prettier"],
  ```

  Algumas regras são conflitantes, neste caso basta criar um arquivo
  .prettierrc com a seguinte configuração

  ```json
    {
      "singleQuote": true,
      "trailingComma": "es5"
    }
  ```

  Para executar o auto fix em vários arquivo basta digitar o comando no prompt:

  ```shell
    yarn eslint --fix src --ext js
  ```

## Plugin vscode editorconfig

Após a instalação do plugin, clicar com o botão direito na pasta raiz e selecionar "Generator .editorconfig", isto faŕa com que a equioe tenha as mesmas configurações mesmo que estiverem trabalhando com outros editores. Ex: sublime

 ```
  root = true

  [*]
  indent_style = space
  indent_size = 2
  charset = utf-8
  trim_trailing_whitespace = true
  insert_final_newline = true
```
