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
    Allergens: {
        type: String
    },
    CategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        require: true
    },
    Category: {
        type: String,
        require: true
    }

});

module.exports = mongoose.model('item', ItemSchema)