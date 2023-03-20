const mongoose = require('mongoose');
require('dotenv').config()
const env = process.env


mongoose.set('strictQuery', true);

const mongoURI = env.mongoURI;

const connectToMongo = () => {
    try {
        mongoose.connect(mongoURI).then(console.log("Connected to db"))
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToMongo;