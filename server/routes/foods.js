const express = require('express');
const food = require('../model/foods');
const route = express.Router();

route.post('/', async(req, res) => {
  let {foodName, type, img, price} = req.body;
  let foodItem = new food({
    foodName: foodName,
    type: type,
    img: img,
    price: price
  });
  let savedFoodItem = await foodItem.save();
  res.status(200).send(savedFoodItem);
})

route.get('/', async(req, res) => {
  let foodItems = await food.find();
  res.status(200).send(foodItems);
})

module.exports = route;
