const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config({
    path: __dirname + `/../.env`
});

const app = express();

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.use(urlencodedParser);
app.use(bodyParser.json());

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

app.use("/api", require("./routes/api"));

app.listen(process.env.API_PORT, () => {
    console.log(`Listen at ${process.env.API_PORT}`);
})