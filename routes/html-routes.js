// var path = require("path");
//for html routes, should have it had access to the models, so that it can load the database data
var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.render("index", {
                Burger: dbBurger
            });
        });
    })
}