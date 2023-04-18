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
     
// Creating model objects
const Task = mongoose.model('Task', TaskSchema);
const Activity = mongoose.model('Activity', ActivitySchema);
    
// Exporting our model objects
module.exports = {
    Task, Activity
}