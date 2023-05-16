# Produtos-Categorias

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- JavaScript
- Express
- NodeJS
- Nodemon
- Sucrase
- Uuid
- PostegresSQL
- Jsonwebtoken
- Bcryptjs
- Dotenv

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

````
yarn install
````


**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

````
yarn --version
````

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

````
npm install --global yarn
````
# **Sobre os testes**

Essa aplicação possui testes, que serão utilizados para validar, se todas as regras de negócio foram aplicadas de maneira correta.

Os testes estão localizados em `src/test/user.spec.js`. 

**De modo algum altere esse arquivo.** Isso poderá comprometer a integridade dos testes.

Além disso, é importante não alterar o arquivo `.babelrc`. (não se preocupe em saber para que serve isso por enquanto).

E também não altere o script de `test` localizado no `package.json`. Isso será utilizado para rodar os testes.


# **Rodando os testes** 

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você deverá utilizar o seguinte comando:

````
yarn test
````
caso seja necessário um log mais completo, utilize o comando:
````
yarn test --all
````
Após isso aparecerá um log no seu terminal, contendo as informações da execução do teste.

**Observação:** O teste pode demorar alguns segundos para ser finalizado.
