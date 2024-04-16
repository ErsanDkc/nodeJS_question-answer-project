const express = require("express")
require("dotenv/config");
const router = require("./routers")


const app = express();
app.use(express.json())

const port = process.env.PORT || 5000

//router middlewares

app.use("/api", router)









app.listen(port, () => {
    console.log(`App started on: ${port}`);
})