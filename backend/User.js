const {Schema, model} = require('mongoose');

const User = Schema({
    name: String,
    email: String,
    password: String
})

module.exports = model("user", User);