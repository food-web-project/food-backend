const mongoose = require("mongoose")
const { Schema } = mongoose;

const CategorySchema = new Schema({

    categoryName: {
        type: String,
        require: true
    },
    thumbnailUrl: {
        type: String,
        require: true
    }

});

module.exports = mongoose.model('category', CategorySchema)