const {Customer} = require('../models/taskModels')

module.exports.getCustomers = async (req, res) =>{
    const text = await Customer.find()
    res.send(text)
}

module.exports.saveCustomer = async (req, res) => {
    const { name, address } = req.body;
    Customer.create({ name, address })
    .then((data) => {
      console.log("Customer Added Successfully..");
      console.log(data);
      res.send(data);
    })
}

module.exports.updateCustomer = async (req,res) =>{
    const{_id, name, address} = req.body
    Customer
    .findByIdAndUpdate(_id, {name: name, address: address})
    .then(() => res.send("Customer Updated Successfully..."))
    .catch((err) => console.log(err))
}


module.exports.deleteCustomer = async (req,res) =>{
    const{_id} = req.body
    Customer
    .findByIdAndDelete(_id)
    .then(() => res.send("Customer Deleted Successfully..."))
    .catch((err) => console.log(err))
}

