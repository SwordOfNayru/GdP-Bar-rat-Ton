const express = require("express");

const router = express.Router();

router.use("/bars", require("./bars/index"));
router.use("/boissons", require("./boissons/index"));
//router.use("/barathon", require("./barathon/index"));

module.exports = router;
