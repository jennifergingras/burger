var express = require('express');
var db = require("../models");


module.exports = function (app) {
  // display all burgers 
  app.get("/api/burgers", function (req, res) {
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


  // change burger state
  app.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    db.Burger.update({
      devoured: req.body.devoured
    }, condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  app.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    db.Burger.delete(condition, function (result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


};

