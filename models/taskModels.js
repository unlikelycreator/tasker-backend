// Requiring module
const mongoose = require('mongoose');
const selectedOptionsSchema = new mongoose.Schema({
    text: { type: String, default: undefined},
  });
  
// Course Modal Schema
const TaskSchema = new mongoose.Schema({
    text: {type: String},
    selectedItems: [selectedOptionsSchema],
});
    
// Student Modal Schema
const ActivitySchema = new mongoose.Schema({
    text: { type: String }
});
/*
const selectedTaskSchema = new mongoose.Schema({
    task: { type: String },
    selectedOptions: [selectedOptionsSchema]
 });*/

 const ItemSchema = new mongoose.Schema({
    itemName: {
      type: String,
    },
    itemDescription: {
      type: String,
    },
    itemPrice: {
      type: Number,
    }
  });
  
  const CustomerSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    address: {
      type: String,
    }
  });

// Creating model objects
const Task = mongoose.model('Task', TaskSchema);
const Activity = mongoose.model('Activity', ActivitySchema);
const Item = mongoose.model('Item',ItemSchema)
const Customer = mongoose.model('Customer', CustomerSchema)
// Exporting our model objects
module.exports = {
    Task, Activity, Item, Customer
}