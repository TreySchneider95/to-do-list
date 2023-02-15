const Task = require("../Model/ToDo")


async function getAllTasks(req, res, next) {
    const tasks = await Task.find({})

    res.json({
      sucess:true,
      tasks: tasks
    });
}


module.exports = {
    getAllTasks,
}