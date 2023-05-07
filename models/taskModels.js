// Requiring module
const mongoose = require('mongoose');
const selectedOptionsSchema = new mongoose.Schema({
    text: { type: String, default: undefined},
  });
  
// Task Modal Schema
const TaskSchema = new mongoose.Schema({
    text: {type: String},
    selectedItems: [selectedOptionsSchema],
});
    
// Activity Modal Schema
const ActivitySchema = new mongoose.Schema({
    text: { type: String }
});

// Item Modal Schema
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
  
  //Customer Modal Schema
  const CustomerSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    address: {
      type: String,
    }
  });

//Invoice Modal Schema
const InvoiceItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

const InvoiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  invoiceNo: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  invoiceItems: {
    type: [InvoiceItemSchema],
    required: true
  },
  totalAmount:{
    type:String,
    required: true
  }
});

// Creating model objects
const Task = mongoose.model('Task', TaskSchema);
const Activity = mongoose.model('Activity', ActivitySchema);
const Item = mongoose.model('Item',ItemSchema)
const Customer = mongoose.model('Customer', CustomerSchema)
const Invoice = mongoose.model('Invoice', InvoiceSchema);

// Exporting our model objects
module.exports = {
    Task, Activity, Item, Customer, Invoice
}