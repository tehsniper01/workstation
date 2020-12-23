//pulling in body parser to handle the post request
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//connecting to MongoDB using a config file
require("../config/mongoose");

//pulling in the model for todo
const Todo = require("../models/todoModel");

//setting express routing
const express = require("express");
const app = express.Router();

//middleware setup for body parser
const urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//code to handle the get, post and delete requests
module.exports = function(app) {
  app.get("/todo", function(req, res) {
    //get data from MongoDB and pass it to the view
    //finds all the items in the collection
    Todo.find({}, function(err, data) {
      if (err) throw err;
      //logs the error to console
      console.log(err);
      //renders the view with data from the DB
      res.render("todo", {
        todos: data
      });
    });
  });

  app.post("/todo", urlencodedParser, function(req, res) {
    //get data from the view, add it to MongoDB
    //creates the new item
    const newTodo = Todo(req.body).save(function(err, data) {
      if (err) throw err;
      //log the error to console
      console.log(err);
      res.json(data);
    });
  });

  app.delete("/todo/:id", function todoDelete(req, res) {
    //delete the requested data from MongoDB
    //This is the code to find the id
    const id = Todo.findById(Todo);
    //this takes the id and deletes the record
    Todo.findOneAndRemove(req.params.id, function todoRemove(err, data) {
      if (err) throw err;
      //logs the error to console
      console.log(err);
      res.json({
        todos: data
      });
    });
  });
};
