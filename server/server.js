const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const food = require('./routes/foods');
const app = express();
app.use(cors());
app.use(express.json())

app.use('/foods', food);

app.listen(3000, ()=> {
  console.log('server started at 3000....')
})

mongoose.connect('mongodb://localhost:27017/foods', ()=> {
  console.log('mongodb connected...');
})