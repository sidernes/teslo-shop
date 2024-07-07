<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Teslo API

1. Clonar el proyecto

2. Instalar las dependecias

```
yarn install
```

3. Clonar el archivo `.env.example` y renombrarlo a `.env`

4. Cambiar las variables de entorno en el archivo `.env`

5. Levantar la base de datos

```
docker-compose up -d
```

6. Correr en modo desarrollo

```
yarn start:dev
```

7. Ejecutar SEED(precaucion con el puerto)

```
localhost:3000/api/v1/seed
```
