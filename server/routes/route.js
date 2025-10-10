const express = require('express');
const addCart = require('../controller/addCart');
const getCart = require('../controller/getCart');
const deleteCart = require('../controller/deleteCart');
const increment = require('../controller/increment');

const route =  express.Router();

route.post('/addCart', addCart);
route.get('/getCart', getCart);
route.delete('/deleteCart/:id',deleteCart);
route.post('/increment',increment)

module.exports = route;