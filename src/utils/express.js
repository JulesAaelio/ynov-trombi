const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('src/assets'));
app.set('view engine', 'pug');
app.set('views','./src/templates');

module.exports = app;