const Task = require("../Model/ToDo")


// 1. Create Task
// 2. Update Task (Mark as Completed/ Uncompleted)
// 3. Delete Task 
// 4. Delete Multipl Tasks 
// 5. Create Muliple Tasks
// 6. Display all Tasks 

async function getAllTasks(req, res, next) {
    const tasks = await Task.find({})
    res.json({
      sucess:true,
      tasks: tasks
    });
}

async function createOneTask(req, res, next){
    try {
        const createdTask = new Task({
            name: req.body.name,
            description: req.body.description,
        })
        const newTask = await createdTask.save()
        res.json({
            sucess: true,
            task: newTask
        })
    } catch (error) {
        console.log(error)
    }
}

async function updateOneTask(req, res, next){
    const taskToupdate = await Task.findOne({name: req.params.name})
        if(taskToupdate.status === "incomplete"){
            console.log('here')
            const updatedTask = await Task.updateOne({name: req.params.name}, {status: "complete"})
            res.json({
                sucess: true,
                task: updatedTask
            })
        }else{
            const updatedTask = await Task.updateOne({name: req.params.name}, {status: "incomplete"})
            res.json({
                sucess: true,
                task: updatedTask
        })
    }
}

async function deleteOneTask(req, res, next){
    const deletedTask = await Task.deleteOne({name: req.params.name})
    res.json({
        sucess: true,
        task: deletedTask
    })
}

async function deleteMultiTask(req, res, next){
    const deletedTasks = await Task.deleteMany({status: req.params.value})
    res.json({
        sucess: true,
        task: deletedTasks
    })
}

async function createMultiTask(req, res, next){
    console.log(req.body)
    Task.insertMany(req.body)
    res.json({
        sucess: true,
    })
}

module.exports = {
    getAllTasks,
    createOneTask,
    updateOneTask,
    deleteOneTask,
    deleteMultiTask,
    createMultiTask
}