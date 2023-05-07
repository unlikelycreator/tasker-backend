const {Invoice} = require('../models/taskModels')

module.exports.getInvoice = async (req, res) =>{
    const invoice = await Invoice.find()
    res.send(invoice)
}

module.exports.saveInvoice = async (req, res) => {
    const {name, invoiceNo, date, invoiceItems, totalAmount} = req.body
     Invoice
     .create({name, invoiceNo, date, invoiceItems, totalAmount})
     .then((data) => { 
        console.log("Added Successfully..");
        console.log(data);
        res.send(data)
     })
}

module.exports.updateInvoice = async (req,res) =>{
    const{_id, name, invoiceNo, date, invoiceItems, totalAmount} = req.body
    Invoice.findByIdAndUpdate(_id, { name, invoiceNo, date, invoiceItems, totalAmount }, { new: true })
    .then((updatedTask) => res.send(updatedTask))
    .catch((err) => console.log(err))
}

module.exports.deleteInvoice = async (req,res) =>{
    const{_id} = req.body
    Invoice
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}

