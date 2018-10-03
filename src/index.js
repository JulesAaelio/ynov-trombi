console.log('App started');
require('dotenv').config();
const app = require('./utils/express');
const db = require('./utils/sequelize');

// Require endpoints here.
app.get('/', (req,res) => {
    res.redirect('trombi');
});

require('./endpoints/trombi')(app,db);

app.listen(process.env.web_port);