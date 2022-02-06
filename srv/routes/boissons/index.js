const express = require("express");
const sequelize = require("../../sequelize/index");
const router = express.Router();

router.get("/", async (req, res) => {
    let queryArray = [];

    if (req.query.name) {
    }
});

router.get("/:id", async (req, res, next) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        next();
        return;
    } else {
        const boissons = sequelize.model("boisson");
        const boisson = await boissons.findOne({
            where: { id: req.params.id },
        });

        if (boisson != null) {
            res.send(boisson);
        } else {
            res.status(404).send(`Can't find ${req.params.id}`);
        }
    }
});

router.get("/type_boisson", async (req, res) => {
    const typeBoisson = sequelize.model("type_boisson");

    const all = typeBoisson.findAll();

    res.json(all);
});

module.exports = router;
