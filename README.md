<h1 align="center">Welcome to VUTTR 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Useful API to allow users to create and manage tons of tools 

## Install

First you need to have nodejs installed in your machine. For that you can use [nvm](https://github.com/nvm-sh/nvm)


This project used a Postgres database running on a docker container.
After Docker installation, run

```sh
docker run --name [database name] -e POSTGRES_PASSWORD=[database password] -p 5432:5432 -d postgres 
```

Using a IDE to manage Postgres such as Postbird, create a database named bossabox.
Keep in mind if you want to change the database name, you have to edit the file database.js 

Clone the repositorie to your workspace

Run

```sh
yarn 
```
in the root of the repositorie

To use the migrations in your project, run

```sh
yarn sequelize db:migrate
```

If it works, two new tables ( users and tools) will be in your database. If only one table comes up, try running again.
In case of errors, try reinstalling the sequelize with

```sh
yarn add sequelize sequelize-cli
```
In order to make request to the API, install insomnia and import the insomnia file inside the docs folder in your repositorie.

To initiate the server, run 
```sh
yarn dev
```
or

```sh
yarn node-sucrase src/server.js
```

## Author

👤 **Arthur Oliveira**

* Github: [@OlvArthur](https://github.com/OlvArthur)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
