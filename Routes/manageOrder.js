const express = require('express');
const router = express.Router();

const Order = require('../Models/Order')

router.post('/create', async (req, res) => {

    try {

        const data = Order(req.body)
        data.save()
        console.log(req.body)
        res.send(req.body)

    } catch (error) {

        console.log(error.message);
        res.status(500).send("Internal Server Error");

    }
})


router.get('/fetch', async (req, res) => {

    try {

        const data = await Order.find()
        res.status(200).json(data)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

})

module.exports = router;