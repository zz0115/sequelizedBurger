var db  = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function(app){
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger){
      // res.json(dbBurger);
      //instead of loading json file, should be rendering the handlebar file
      res.render("index",{
        Burger: dbBurger
      });
    });
  });
  
  app.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body).then(function(dbBurger){
      res.json(dbBurger);
    })
  });
  
  app.put("/api/burgers/:id", function(req, res) {
   db.Burger.update(
     req.body,{
      where:{
        id: req.params.id
      }
     }).then(function(dbBurger){
       res.json(dbBurger);
     })
  });
}

