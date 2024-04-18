const mongoose = require("mongoose")

const Schema = mongoose.Schema


const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "This email already taken, Please try different email"],
        //ersan@gmail.com
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please provide a valid email"
        ]
    },
    role: {
        type: String,
        default: "user",
        enum: ["user,", "admin"]
    },
    password: {
        type: String,
        minLength: [6, "Please provide a password at least 6 Characters"],
        required: [true, "Please provide a password"],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String,
    },
    about: {
        type: String
    },
    place: {
        type: String
    },
    webSite: {
        type: String
    },
    profile_image : {
        type: String,
        default: "default.jpg"
    },
    blocked: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model("User",UserSchema)
