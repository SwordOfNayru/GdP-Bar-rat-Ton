const express = require("express");
const sequelize = require("../../sequelize/index");
const { Op, QueryTypes, NUMBER } = require("sequelize");
const router = express.Router();

router.get("/", async (req, res) => {
    const bars = sequelize.model("bar");
    const boissons = sequelize.model("boisson");
    const typeBoissons = sequelize.model("type_boisson");

    let type_boisson;
    let result;

    if (req.query.type_boisson != null) {
        type_boisson = await typeBoissons.findOne({
            where: {
                id: req.query.type_boisson,
            },
        });

        if (type_boisson == null) {
            res.status(404).send("type boisson not found");
        }

        if (type_boisson.length == 0) {
            res.status(404).send("type boisson not found");
        }
    } else {
        res.status(400).send("Must have type boisson");
        return;
    }

    console.log(type_boisson);

    if (req.query.budget != null) {
        let budget = parseFloat(req.query.budget);
        if (!isNaN(budget)) {
            result = await sequelize.query(
                `SELECT * FROM bar 
                    WHERE 
                        EXISTS( 
                            SELECT 1
                            FROM servis, (SELECT id FROM boissons WHERE "typeBoissonId" = :type_boisson ) AS b
                            WHERE servis."barId" = bar."id" AND
                                servis."boissonId" = b."id"
                            )`,
                {
                    replacements: { type_boisson: type_boisson.id },
                    type: QueryTypes.SELECT,
                }
            );

            console.log("bars", result);

            var shuffled = result.sort(function () {
                return 0.5 - Math.random();
            });

            if (result.length > 5) {
                result = shuffled.slice(0, 5);
            }

            var sum = 0;
            var i = 1;
            for (let b of result) {
                boisson_result = await sequelize.query(
                    `SELECT boissons.*, servis.prix, servis.quantite FROM boissons, servis WHERE servis."barId" = :bar_id AND boissons."typeBoissonId" = :type_boisson AND servis."boissonId" = boissons.id;`,
                    {
                        replacements: {
                            type_boisson: type_boisson.id,
                            bar_id: b.id,
                        },
                        type: QueryTypes.SELECT,
                    }
                );

                b.boissons = boisson_result;

                if (req.query.happy_hour) {
                    sum += boisson_result[0].prix;
                } else {
                    sum += boisson_result[0].prix * 0.6;
                }

                if (req.query.nb > 1) {
                    for (
                        let i = 1;
                        i < boisson_result.length < req.query.nb
                            ? boisson_result.length
                            : req.query.nb;
                        i++
                    ) {
                        if (sum >= budget) break;
                        if (req.query.happy_hour) {
                            sum += boisson_result[i].prix;
                        } else {
                            sum += boisson_result[i].prix * 0.6;
                        }
                    }
                }

                if (sum >= budget) {
                    result = result.slice(0, i);
                }
                i++;
            }

            res.json(result);
        }
    } else {
        res.status(400).send("Must have a budget");
    }
});

module.exports = router;
