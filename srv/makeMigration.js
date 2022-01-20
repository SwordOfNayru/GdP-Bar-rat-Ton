require("dotenv").config({
    path: __dirname + `/../.env`
});

const sequelize = require("./sequelize/index");

console.log("All data : ")
console.log(sequelize.model("bar"))

console.log("try to sync the base");
sequelize.sync({force:true})
    .then(() => {
        console.log("done")
    });