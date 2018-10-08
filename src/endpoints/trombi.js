module.exports = (app,db) => {
  app.get('/trombi',async (req,res) => {
      const persons = await db.Person.findAll();
    res.render('trombi', {
      persons,
    });
  });
};