module.exports = (app,db) => {
  app.get('/trombi',async (req,res) => {
      const options = {};
      if(req.query.spe) {
          options.where  = Object.assign(options.where || {}, {
              speciality: {
                  [db.db.Op.eq] : req.query.spe.toLowerCase()
              }
          });
      }
      if(req.query.firstname) {
          options.where  = Object.assign(options.where || {}, {
              firstname: {
                  [db.db.Op.like] : `%${req.query.firstname}%`
              }
          });
      }
      if(req.query.lastname) {
          options.where  = Object.assign(options.where || {}, {
              lastname: {
                  [db.db.Op.like] : `%${req.query.lastname}%`
              }
          });
      }
      const persons = await db.Person.findAll(options);
    res.render('trombi', {
      persons,
      query: req.query || {}
    });
  });
};