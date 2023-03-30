const express = require('express');
const router = express.Router();

const Item = require('../Models/Items');

router.post('/create', (req, res) => {
    try {

        const data = Item(req.body)
        data.save()
        console.log(req.body)
        res.send(req.body)

    } catch (errors) {
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }
})


router.get('/fetch/all', async (req, res) => {
    try {

        const data = await Item.find()
        res.json(data)

    } catch (error) {
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }
})


router.post('/fetch/sorted-item', async (req, res) => {

    const { categoryID, milk, egg, mustard, barley, wheat } = req.body;

    console.log(req.body);

    try {

        const data = await Item.find({
            CategoryID: categoryID,
            Milk: { $ne: milk },
            Wheat: { $ne: wheat },
            Egg: { $ne: egg },
            Mustard: { $ne: mustard },
            Barley: { $ne: barley }
        })



        res.send(data)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


router.get('/fetch/:CategoryID', async (req, res) => {
    try {

        const data = await Item.find({ CategoryID: req.params.CategoryID })
        res.json(data)

    } catch (errors) {

        console.error(errors.message);
        res.status(500).send("Internal Server Error");

    }
})

module.exports = router;