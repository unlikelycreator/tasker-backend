// Requiring module
const mongoose = require('mongoose');
    
// Course Modal Schema
const TaskSchema = new mongoose.Schema({
    text: String,
});
    
// Student Modal Schema
const ActivitySchema = new mongoose.Schema({
    text: String,
});
const selectedOptionsSchema = new mongoose.Schema({
    text: { type: String }
  });
const selectedTaskSchema = new mongoose.Schema({
    task: { type: String },
    selectedOptions: [selectedOptionsSchema]
 });

// Creating model objects
const Task = mongoose.model('Task', TaskSchema);
const Activity = mongoose.model('Activity', ActivitySchema);
const Ta = mongoose.model('Ta',selectedTaskSchema)
    
// Exporting our model objects
module.exports = {
    Task, Activity, Ta
}