var express = require('express');
var burger = require("../models");


module.exports = function (app) {
  // display all burgers 
  app.get("/burgers", function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

  // router.get("/", function (req, res) {
  //   burger.all(function (data) {
  //     var hbsObject = {
  //       burgers: data
  //     };
  //     console.log(hbsObject);
  //     res.render("index", hbsObject);
  //   });
  // });



  // add burger
  app.post("/api/burgers", function (req, res) {
    db.Burger.create(req.body).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });



  app.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
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

    burger.delete(condition, function (result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


};
