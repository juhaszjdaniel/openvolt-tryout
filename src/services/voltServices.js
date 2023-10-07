const axios = require('axios');

const VOLT_TOKEN= process.env.VOLT_TOKEN

const url = 'https://api.openvolt.com/v1/interval-data?meter_id=6514167223e3d1424bf82742&granularity=hh&start_date=2023-01-01&end_date=2023-01-31';

let sum = 0

async function callVoltApp() {
    const response = await axios.get(url, { headers: { 'X-Api-Key': VOLT_TOKEN } })
    var datas = response.data.data
    datas.forEach(getInformation)
    return {energyConsumed: sum};
}

function getInformation(item){
    sum += parseInt(item.consumption)
}

module.exports = callVoltApp