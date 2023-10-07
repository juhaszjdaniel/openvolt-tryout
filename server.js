const express = require("express");
const voltRoute = require("./src/routes/voltRoute")

const app = express()

app.use(express.json())

app.use("/api/volt", voltRoute)

app.listen(3000, ()=> {
    console.log('Node is running on port 3000');
});
