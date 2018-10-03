module.exports = (app,db) => {
  app.get('/trombi',(req,res) => {
    res.render('base');
  });
};