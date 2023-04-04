const express = require('express');
const cors = require('cors');
const connectToMongo = require('./config/db');

require('dotenv').config()
const env = process.env;
const app = express();

app.use(cors())

const port = process.env.PORT || 5000;


app.use(express.json())

connectToMongo();

app.use('/api/category', require('./Routes/manageCategory'))
app.use('/api/item', require('./Routes/manageItem'))
app.use('/api/rating', require('./Routes/manageRating'))
app.use('/api/order', require('./Routes/manageOrder'))

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
