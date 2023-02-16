const express = require('express');
const router = express.Router();

const Task = require("./Model/ToDo")
const taskController = require("./controller/toDoController")

// 1. Create Task
// 2. Update Task (Mark as Completed/ Uncompleted)
// 3. Delete Task 
// 4. Delete Multipl Tasks 
// 5. Create Muliple Tasks
// 6. Display all Tasks 

router.get('/', taskController.getAllTasks);

router.post('/create-one', taskController.createOneTask);

router.put('/update-one/:name', taskController.updateOneTask);

router.delete('/delete-one/:name', taskController.deleteOneTask);

router.delete('/delete-multi/:value', taskController.deleteMultiTask);

router.post('/create-multi', taskController.createMultiTask);

module.exports = router