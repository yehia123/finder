const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Cards = require('../dbCards');

router.post("/pinder/cards", (req, res) => {
    try {
        const dbCard = req.body;
        const name = dbCard.name;
        const img = dbCard.imgUrl;
        const card = new Cards({
            name,
            img
        });
        card.save();
        return res.status(200).json({
            message: "Card Created!",
            success: true
    });
    } catch(err) {
        return res.status(500).json({
            message: "something went wrong",
            success: false
        });
    }

});

router.get("/pinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
    });

module.exports = router;