# RD Test
A basic REST API boilerplate using Koa + TypeScript as well as Jest for unit testing

## Table of Contents
- [Building development environment](#building-development-environment)
- [Running tests](#running-tests)
- [API Documentation](#api-documentation)

## Building development environment

This command launches a real-time updating typescript compiler inside a docker container running on port 8080.
```bash
docker-compose up (windows)
docker compose up (unix)
```
Alternatively ```cd``` into the rest_api directory and run ```npm install && npm run dev```

## Running tests

- In the ```rest_api``` directory, run: 
```bash
npm run test
```

## API Documentation

GET /

POST /object

Example body: 

```json
  {
      "organizationId": 12,
      "objectId": 2,
      "name": "Printer"
  }
```
