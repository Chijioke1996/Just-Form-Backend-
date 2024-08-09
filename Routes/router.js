const express = require("express")
const route = express.Router()
const mongoose = require("mongoose")
const User = require("../Model/db")

route.get("/", async (req, res) => {

    try {
        let users = await User.find();
        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ success: false, msg: "No users found" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Server error" });
    }


})

route.post("/form", async (req, res) => {


    try {
        const { name, email } = req.body

        let user = new User({ name, email })
        user = await user.save()
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "User not created" })
    }




})

module.exports = route