const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Cards = require('../dbCards');

router.post("/pinder/cards", async (req, res) => {
    try {
        const dbCard = req.body;
        const name = dbCard.name;
        const animalType = dbCard.animalType;
        const card = new Cards({
            name,
            animalType
        });
        console.log(card);
        await card.save();
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

router.get("/pinder/specific_cards", (req, res) => {
    Cards.find(({animalType: req.body.animalType}),(err, data) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
    });

router.post("/pinder/add_photo", async (req, res) => {
    try{
        const card = await Cards.find(req.body.id);
        const img = req.body.imgUrl;
        console.log(card);
        console.log(img);
        card.imgsUrl.push(img);
        return res.status(200).json({
            message: 'img added!'
        })
    }
    catch(err) {
        return res.status(500).json({
            message: "something went wrong",
            success: false
        });
    }
})



module.exports = router;