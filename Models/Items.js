const mongoose = require("mongoose")
const { Schema } = mongoose;

const ItemSchema = new Schema({

    Name: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    ImageURL: {
        type: String,
        require: true
    },
    ImageURLBackup: {
        type: String,
        require: true
    },
    Price: {
        type: String,
        require: true
    },
    CategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        require: true
    },
    type: {
        type: String,
        require: true
    },
    Category: {
        type: String,
        require: true
    },
    Milk: {
        type: Boolean,
        default: null
    },
    Egg: {
        type: Boolean,
        default: null
    },
    Mustard: {
        type: Boolean,
        default: null
    },
    Barley: {
        type: Boolean,
        default: null
    },
    Wheat: {
        type: Boolean,
        default: null
    }
});

module.exports = mongoose.model('item', ItemSchema)