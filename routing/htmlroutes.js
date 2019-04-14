var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
      res.render("index", {
        burger: dbBurger
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
