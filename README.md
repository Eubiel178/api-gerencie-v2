const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { config } = require("dotenv");

const { PORT = 4000, LOCAL_ADDRESS = "0.0.0.0" } = process.env;

const connectToDatabase = require("./src/database/connect");
const userControl = require("./src/routes/userControl");
const taskControl = require("./src/routes/taskControl");

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

config();

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
connectToDatabase();
app.use(express.urlencoded({ extended: true }));

//routes
app.use(userControl);
app.use(taskControl);

app.listen(PORT, LOCAL_ADDRESS);


# README

## Base URL

```
https://api-for-todo-list.vercel.app/
```

# Endpoints

## POST /authenticate

LOGIN

body

```json
{
  "email": "example@gmail.com",
  "password": "123456"
}
```

## POST /users

CREATE ACCOUNT

body

Password must be at least 6 digits

```json
{
  "name": "Example",
  "email": "example@gmail.com",
  "password": "123456",
  "password_confirmation": "123456"
}
```

## PATCH /users/:id

EDIT ACCOUNT DATA

body

Pass the fields you want to change in the json

```json
{
  "name": "Gab"
}
```

## DELETE /users/:id

DELETE ACCOUNT

# Task

## POST /list

```json
{
  "description": "Test",
  "isFinished": false,
  "userID": "test",
  "index": "2", //campo nao obrigatorio
  "key": "4", //campo nao obrigatorio
  "_id": "23728478I02", //campo nao obrigatorio
  "urgency": "#FF0000" //campo nao obrigatorio
}

 --Urgency:
   <div>#FF0000</div>: Urgente
   #ffa500: Pouca urgencia
   #90ee90 : Nao urgente ou feito
// Chave key usado para quando o for iterar sobre um array, basta quando for adicionar o item no backend enviar um numero aleatorio. Obs: os numeros nao podem se repetir,

//O campo index e utilizado quando o programador deseja ordenar o array no frontend
```

## GET /list/user-id/:id

## PATCH /list/task-id/:id

pass the fields you want to change in the json

```json
{
  "isFinished": false
}
```

## DELETE /list/task-id/:id
