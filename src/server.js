require('dotenv').config();
const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Conecta no MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Carrega o model de Usuário
require("./models/users");

// pode ser substituido copor express.json() se fizer o require puro "require('express')"
app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"));