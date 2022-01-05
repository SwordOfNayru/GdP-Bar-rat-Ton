var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.send("This is an exemple")
});

router.get("/sub", (req, res) => {
    res.send("This is a sub exemple");
})

module.exports = router;