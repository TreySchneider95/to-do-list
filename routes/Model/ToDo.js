const mongoose = require("mongoose")
const {v4: uuidv4} = require("uuid")

const taskSchema = new mongoose.Schema({
    title: String,
    text: String,
    author: String,
    completed: {type: Boolean, default: false},
    id: {type: String, default: uuidv4()},
    createdAt: {type: Date, default: Date.now}
})

const Task = mongoose.model("tasks", taskSchema)

module.exports = Task