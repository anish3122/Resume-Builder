const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const RegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // confirmPassword: {
    //     type: String,
    //     required: true,
    // }
});
const RegisterModel = mongoose.model("Register", RegisterSchema);
module.exports = RegisterModel;