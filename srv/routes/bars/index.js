const express = require("express");
const sequelize = require("../../sequelize/index");
const router = express.Router();

router.get("/:id", async (req, res) => {
    let bars = sequelize.model("bar");
    let bar = await bars.findOne({where : { id : req.params.id}});

    if(bar != null) {
        res.send(bar)
    }
    else {
        res.status(404).send(`Can't find ${req.params.id}`)
    }
})

module.exports = router