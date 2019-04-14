// required stuff
var express = require('express');
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;
var app = express();

var db = require("./models");

// public diretory
app.use(express.static("public"));


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// handlebars
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// routes
require("./routing/apiroutes")(app);
require("./routing/htmlroutes")(app);

var syncOptions = {
  force: false
};

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
