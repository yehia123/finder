const {Schema, model} = require('mongoose');

const cardSchema = Schema({
    name: String,
    imgUrl: String
})

module.exports = model("cards", cardSchema);