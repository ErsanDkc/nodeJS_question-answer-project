const express = require("express")
require("dotenv/config");
const router = require("./routers")
const connectDatabase = require("./helpers/database/connectDatabase")
//mongo Db connections
connectDatabase()
const app = express();
app.use(express.json())

const port = process.env.PORT || 5000

//router middlewares

app.use("/api", router)









app.listen(port, () => {
    console.log(`App Started on: ${port}`);
})