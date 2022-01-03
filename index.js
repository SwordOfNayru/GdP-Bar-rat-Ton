const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(process.env.BB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "postgres"
});

const app = express();

const urlencodedParser = bodyParser.urlencoded({
    extended: true,
});

app.use(urlencodedParser);
app.use(bodyParser.json());

//Définition des CORS
app.use(function (req, res, next) {
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

//Middle ware de log

//Toute les routes
//Ici il y en a deux principaux :
// /api/* qui sont toute les routes d'api
// /* qui sont l'accès aux pages


//Démarrage du serveur web
app.listen(process.env.WEB_PORT | 8080, () => {

});
