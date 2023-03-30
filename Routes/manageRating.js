const express = require('express');
const router = express.Router();

const Rating = require('../Models/Rating')

router.post('/create', async (req, res) => {

    try {

        const data = Rating(req.body)
        data.save()
        console.log(req.body)
        res.status(200).send(req.body)

    } catch (errors) {
        console.log(errors);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/fetch/:id', async (req, res) => {
    try {
        const data = await Rating.find({"ItemID":req.params.id})
        res.json(data)
    } catch (errors) {
        console.log(errors);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;