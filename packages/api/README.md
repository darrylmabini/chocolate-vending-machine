# Chocolate Vending Machine

## Prerequisite

1. Node version `v12.0+`.
2. Port 3000 availability.

## Requirments

![Node Version](https://img.shields.io/badge/Node-%3D%3E%20v14.17.0-blue)
![Yarn Version](https://img.shields.io/badge/Yarn-%3D%3E%20v1.22.10-blue)

## Getting Started

### Install dependencies

```console
yarn install
```

### Test

```console
yarn test
```

### Linter

```console
yarn test
```

### Start

```console
yarn start
```

### REST API

`/api/products`

```terminal
curl --location --request GET 'http://localhost:4000/api/products'
```

`/api/product/:id`

```terminal
curl --location --request POST 'http://localhost:4000/api/product/2' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 2,
    "name": "Hazelnut",
    "quantity": 2
}'
```

## Folder Structure

```
src/
├── application
│   └── handler
├── config
├── domain
│   ├── exception
│   └── product
├── infrastructure
│   ├── http
│   │   ├── api
│   │   ├── exception
│   │   └── middleware
│   └── persistence
├── tests
├── index.ts
├── server.ts
└── types.ts
```

## Architechture Diagram

<p align="center">
  <img src="./public/architechture-diagram.png" />
</p>
