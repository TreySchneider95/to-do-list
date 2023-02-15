const express = require('express');
const router = express.Router();

const Task = require("./Model/ToDo")
const taskController = require("./controller/toDoController")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('toDo', { title: 'Express' });
  });

module.exports = router