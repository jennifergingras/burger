var express = require('express');
var db = require("../models");

var router = express.Router();

module.exports = function (app) {
  // display all burgers 
  app.get("/burgers", function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

  // add burger
  app.post("/api/burgers", function (req, res) {
    db.Burger.create(req.body).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

};





module.exports = router;