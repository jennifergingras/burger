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


  // change burger state from uneaten to eaten
  app.put("/api/burgers/:id", function (req, res) {
    // console.log("========================================")
    // console.log(req.params.id)
    // console.log("========================================")

    db.Burger.update({ devoured: req.body.devoured }, {
      where: { id: req.params.id }
    }).then(function (result) {
      console.log("Got inside the db call");
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        // res.status(200).end();
        res.json(result);
      }
    });
  });

  // delete the burger
  app.delete("/api/burgers/:id", function (req, res) {

    db.Burger.destroy({
      where: { id: req.params.id }
    }).then(function (result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.json(result);
      }
    });
  });

};

