var express = require("express");
var bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');
var hbs = exphbs.create({defaultLayout: 'main'});

var PORT = process.env.PORT || 3030;

var app = express();

var db  = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/burger-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
//force true: wipe out database every time when restart
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
