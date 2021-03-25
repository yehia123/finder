const {Schema, model} = require('mongoose');

const cardSchema = Schema({
    name: String,
    animalType: String,
    imgsUrl: [{
        type: String
    }]
})

module.exports = model("cards", cardSchema);