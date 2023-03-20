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