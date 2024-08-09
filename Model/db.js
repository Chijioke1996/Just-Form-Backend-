const mongoose = require("mongoose")
const {isEmail} = require("validator")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "Please enter an email address"]
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User