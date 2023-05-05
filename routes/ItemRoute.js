const { Router } = require("express");

const { getItems, saveItems, updateItem, deleteItem} = require("../controllers/itemController");

const router = Router();

router.get("/item", getItems);

router.post("/item/save", saveItems);

router.post('/item/update', updateItem);

router.post('/item/delete', deleteItem)

module.exports = router;