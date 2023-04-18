const { Router } = require("express");

const { getTask, saveTask, updateTask, deleteTask} = require("../controllers/taController");

const router = Router();

router.get("/ta", getTask);
/*
router.post("/ta/save", saveTask);

router.post('/ta/update', updateTask);

router.post('/ta/delete', deleteTask)*/

module.exports = router;