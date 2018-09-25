console.log('App started');
require('dotenv').config();
const app = require('./utils/express');


// Require endpoints here.
app.use('/', (req,res) => {
    res.render('base');
});

app.listen(process.env.web_port);