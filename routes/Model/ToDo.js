const mongoose = require("mongoose")
const {v4: uuidv4} = require("uuid")


// name - type: string, validation: required
// description - type: string
// completed - type: boolean, validation: required
// dateCreated - type: date, default: Date.now(), validation: required
// dateCompleted - type: date
// status - type: string, default: 'incomplete', validation: required, enum: ['incomplete', 'complete', 'deferred']

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    completed: {type: Boolean, default: false, validation: required},
    dateCreated: {type: Date, default: Date.now, validation: required},
    dateCompleted: {type: Date},
    status: {type: String, default: "incomplete", validation: required, enum: ["incomplete", "complete", "deferred"]},
    id: {type: String, default: uuidv4()},
})

const Task = mongoose.model("tasks", taskSchema)

module.exports = Task