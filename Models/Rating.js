const mongoose = require("mongoose")
const { Schema } = mongoose;

const RatingSchema = new Schema({
    ItemID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item',
        require: true
    },
    Rating: {
        type: Number
    }
})

module.exports = mongoose.model('rating', RatingSchema)