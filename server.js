const express = require('express');
const cors = require('cors');
const connectToMongo = require('./config/db');

require('dotenv').config()
const env = process.env;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: "https://food-webapp-robot.netlify.app/", }))

app.use(express.json())

connectToMongo();

app.use('/api/category', require('./Routes/manageCategory'))
app.use('/api/item', require('./Routes/manageItem'))

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
