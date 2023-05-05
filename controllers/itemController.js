const {Item} = require('../models/taskModels')

module.exports.getItems = async (req, res) =>{
    const text = await Item.find()
    res.send(text)
}

module.exports.saveItems = async (req, res) => {
    const { itemName, itemDescription, itemPrice } = req.body;
    Item.create({ itemName, itemDescription, itemPrice })
    .then((data) => {
      console.log("Item Added Successfully..");
      console.log(data);
      res.send(data);
    })
}

module.exports.updateItem = async (req,res) =>{
    const{_id,itemName, itemDescription, itemPrice} = req.body
    Item
    .findByIdAndUpdate(_id, {itemName: itemName, itemDescription: itemDescription, itemPrice:itemPrice})
    .then(() => res.send("Item Updated Successfully..."))
    .catch((err) => console.log(err))
}


module.exports.deleteItem = async (req,res) =>{
    const{_id} = req.body
    Item
    .findByIdAndDelete(_id)
    .then(() => res.send("Item Deleted Successfully..."))
    .catch((err) => console.log(err))
}

