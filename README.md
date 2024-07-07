<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Teslo API

Teslo API is a powerful backend application built with NestJS, designed to handle various logistical operations efficiently. The application includes comprehensive features such as JWT-based access validation, WebSocket support, file management, a complete RESTful API, Docker container deployment, and robust database handling.

## Technologies Used

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-000000?style=for-the-badge&logo=socket.io&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Mapbox](https://img.shields.io/badge/Mapbox-000000?style=for-the-badge&logo=mapbox&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FF5733?style=for-the-badge&logo=typeorm&logoColor=white)
![UUID](https://img.shields.io/badge/UUID-0690FA?style=for-the-badge&logo=uuid&logoColor=white)
![Passport](https://img.shields.io/badge/Passport-34E27A?style=for-the-badge&logo=passport&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

## Features

- **JWT Access Validation**: Secure endpoints using JSON Web Tokens for authentication and authorization.
- **WebSocket**: Real-time communication features using WebSockets.
- **File Management**: Efficient file handling and management.
- **Complete RESTful API**: Full-featured RESTful API for various operations.
- **Docker Deployment**: Easily deployable using Docker containers.
- **Database Management**: Handles data using multiple database systems.

### Prerequisites

- Node.js
- Yarn
- Docker
- Nest CLI (optional but recommended)
- Mapbox API key

## Getting Started

Follow these instructions to set up and run the application on your local machine.

#### 1. Clone the repository
```sh
https://github.com/sidernes/04-teslo-shop.git
```
#### 2. Install dependencies
```sh
yarn install
```

#### 3. Clone the `.env.example` file and rename it to `.env`

#### 4. Change the environment variables in the `.env` file

#### 5. Start the database using Docker
```sh
docker-compose up -d
```
#### 6. Run in development mode
```sh
yarn start:dev
```

#### 7. Execute SEED (be cautious with the port)
```sh
localhost:3000/api/v1/seed
```
