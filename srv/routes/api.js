const express = require("express");

const router = express.Router();

router.use("/exemple", require("./exemple/exemple"));

module.exports = router