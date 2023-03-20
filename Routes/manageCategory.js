const express = require('express');
const router = express.Router();

const Category = require('../Models/Category')


router.post('/create', (req, res) => {
    try {
        const data = Category(req.body)
        data.save()
        console.log(req.body)
        res.send(req.body)
    } catch (errors) {
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }
})


router.get('/fetch', async (req, res) => {
    try {

        const data = await Category.find()
        res.json(data)

    } catch (errors) {
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/fetch/:ID', async (req, res) => {
    try {

        const data = await Category.find({ _id: req.params.ID })
        console.log(data[0]);
        res.json(data[0])

    } catch (errors) {
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;