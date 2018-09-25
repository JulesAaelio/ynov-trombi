console.log('App started');
require('dotenv').config();
const app = require('./utils/express');
const db = require('./utils/sequelize');

// Require endpoints here.
app.use('/', (req,res) => {
    res.render('base');
});

app.listen(process.env.web_port);