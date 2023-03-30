const mongoose = require("mongoose")
const { Schema } = mongoose;

const OrderSchema = new Schema({
    TableNo: {
        type: String,
        require: true
    },
    ItemID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item',
        require: true
    },
    Status: {
        type: String,
        default: "Pending"
    }
})


module.exports = mongoose.model('order', OrderSchema)