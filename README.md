# DS Catalog

## Sobre o projeto

http://dscatalog-kennedy.netlify.app/

DS Catalog é uma aplicação Full Stack web e mobile construída durante o Bootcamp  **Spring React**, ministrado pela [DevSuperior](https://devsuperior.com/).

O software consiste em uma aplicação de catálogo de produtos, onde há três tipos de permissões, a do usuário não autenticado, que pode apenas visualizar os produtos, a do usuário com perfil operador, que pode também adicionar categorias ou produtos e a do usuário administrador, que além das outras permissões, também pode gerenciar os outros usuários da aplicação.

Neste projeto também foram trabalhados tópicos como testes com Junit, além de CI/CD e implantação com Docker na Oracle Cloud. 

#### Layout web

![Web 1](https://github.com/KEENNEEDYY/dscatalog-homolog/blob/main/assets/home-frontend.png?raw=true)

![Web 2](https://github.com/KEENNEEDYY/dscatalog-homolog/blob/main/assets/catalogo-frontend.png?raw=true?raw=true)

![Web 3](https://github.com/KEENNEEDYY/dscatalog-homolog/blob/main/assets/produtos-frontend.png?raw=true)

![Web 4](https://github.com/KEENNEEDYY/dscatalog-homolog/blob/main/assets/produtos-edicao-frontend.png?raw=true)

![Web 5](https://github.com/KEENNEEDYY/dscatalog-homolog/blob/main/assets/formulario-usuarios-frontend.png?raw=true)

#### Modelo conceitual

[![Modelo Conceitual](https://github.com/KEENNEEDYY/dscatalog-homolog/blob/main/assets/modelo-conceitual.png?raw=true)](https://raw.githubusercontent.com/KEENNEEDYY/dsdeliver-sds2/assets/modelo-conceitual.png)

## Tecnologias utilizadas

#### Back end

- Java
- Spring Boot
- JPA / Hibernate
- Maven
- OAuth/JWT
- Junit

#### Front end

- HTML / CSS / Sass/ Bootstrap/ JS / TypeScript
- ReactJS
- Axios
- React Hook Forms
- React Select

#### Implantação em produção

- Back end: Oracle Cloud
- Front end web: Netlify
- Banco de dados: Postgresql

## Como executar o projeto

#### Back end

Pré-requisitos: Java 17

```
## clonar repositório
git clone https://github.com/KEENNEEDYY/dscatalog-homolog.git

## entrar na pasta do projeto back end
cd backend

## executar o projeto
./mvnw spring-boot:run
```

#### Front end web

Pré-requisitos: npm / yarn

```
## clonar repositório
git clone https://github.com/KEENNEEDYY/dscatalog-homolog.git

## entrar na pasta do projeto front end web
cd frontweb

## instalar dependências
yarn install

## executar o projeto
yarn start
```

## Autor

Kennedy Leocadio

https://www.linkedin.com/in/kennedy-l-62a845170/
