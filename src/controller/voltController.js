require('dotenv').config()

const callVoltApp = require("../services/voltServices");

async function getVolt(req, res) {
    try {
        var response = await callVoltApp()
        res.json(response);
    } catch (error) {
        console.error(error);
    }
  }

module.exports = getVolt