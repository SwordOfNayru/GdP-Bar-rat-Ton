const express = require("express");

const router = express.Router();

router.get("/", (req,res) => {
    res.send({
        test: 1
    })
})

module.exports = router