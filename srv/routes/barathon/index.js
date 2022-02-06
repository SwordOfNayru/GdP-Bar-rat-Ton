const express = require("express");
const sequelize = require("../../sequelize/index");
const { Op, QueryTypes } = require("sequelize");
const router = express.Router();

router.get("/", async (req, res) => {
    const bars = sequelize.model("bar");
    const boissons = sequelize.model("boissons");
    const typeBoissons = sequelize.model("type_boisson");

    let type_boisson;
    let bars;

    if (req.query.type_boisson != null) {
        type_boisson = await typeBoissons.findOne({
            where: {
                nom: {
                    [Op.like]: `${req.query.type_boisson}%`,
                },
            },
        });
    } else {
        res.status(400).send("Boisson type not found");
        return;
    }

    if (req.query.budget != null) {
        let budget = parseFloat(req.query.budget);
        if (!isNaN(budget)) {
            bars = await sequelize.query(
                `SELECT * FROM bar 
                    WHERE 
                        EXISTS( 
                            SELECT 1
                            FROM servis, (SELECT id FROM boissons WHERE typeBoissonId = :type_boisson ) AS b
                            WHERE servis.barId = bar.id AND
                                servis.boissonId = b.id
                            )`,
                {
                    replacements: { type_boisson: type_boisson.id },
                    type: QueryTypes.SELECT,
                }
            );

            console.log(bars);
        }
    } else {
        res.status(400).send("Must have a budget");
    }
});

module.exports = router;
