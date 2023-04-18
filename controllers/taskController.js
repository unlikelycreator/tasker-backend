const {Task} = require('../models/taskModels')

module.exports.getTask = async (req, res) =>{
    const task = await Task.find()
    res.send(task)
}

module.exports.saveTask = async (req, res) => {
    const {text} = req.body
     Task
     .create({text})
     .then((data) => { 
        console.log("Added Successfully..");
        console.log(data);
        res.send(data)
     })
}

module.exports.updateTask = async (req,res) =>{
    const{_id, text} = req.body
    Task
    .findByIdAndUpdate(_id,{text})
    .then(() => res.send("Updates Successfully..."))
    .catch((err) => console.log(err))
}

module.exports.deleteTask = async (req,res) =>{
    const{_id} = req.body
    Task
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}

