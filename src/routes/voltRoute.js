const express = require("express");

const getVolt = require('../controller/voltController')

const router = express.Router();

router.get('/', getVolt);


module.exports = router;