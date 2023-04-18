const {Task, Activity} = require('../models/taskModels')

module.exports.getActivity = async (req, res) =>{
    const activityname = await Activity.find()
    res.send(activityname)
}

module.exports.getTask = async (req, res) =>{
    const taskname = await Task.find()
    res.send(taskname)
}

