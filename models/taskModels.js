// Requiring module
const mongoose = require('mongoose');
const selectedOptionsSchema = new mongoose.Schema({
    text: { type: String }
  });
  
// Course Modal Schema
const TaskSchema = new mongoose.Schema({
    text: {type: String},
    selectedOptions: [selectedOptionsSchema]
});
    
// Student Modal Schema
const ActivitySchema = new mongoose.Schema({
    text: String,
});
/*
const selectedTaskSchema = new mongoose.Schema({
    task: { type: String },
    selectedOptions: [selectedOptionsSchema]
 });*/

// Creating model objects
const Task = mongoose.model('Task', TaskSchema);
const Activity = mongoose.model('Activity', ActivitySchema);
//const Ta = mongoose.model('Ta',selectedTaskSchema)
    
// Exporting our model objects
module.exports = {
    Task, Activity
}