const express = require('express');
const app = express();
const SaladController = require('./controllers/Salad.controller');
const { errorHandler } = require('./errorHandler');

app.use(express.json());

app.post('/', SaladController.createSalad);
app.get('/');
app.get('/:');

app.use(errorHandler);

module.exports = app;