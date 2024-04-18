const mongoose = require("mongoose")

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("mongo DB Connection success");
    })
        .catch(err => {
            console.log("mongoDb Error", err);
        })
}
module.exports = connectDatabase