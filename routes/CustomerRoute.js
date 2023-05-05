const { Router } = require("express");

const { getCustomers, saveCustomer, updateCustomer, deleteCustomer} = require("../controllers/customerController");

const router = Router();

router.get("/customer", getCustomers);

router.post("/customer/save", saveCustomer);

router.post('/customer/update', updateCustomer);

router.post('/customer/delete', deleteCustomer)

module.exports = router;