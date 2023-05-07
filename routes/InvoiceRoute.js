const { Router } = require("express");

const { getInvoice, saveInvoice, updateInvoice, deleteInvoice} = require("../controllers/InvoiceController");

const router = Router();

router.get("/invoice", getInvoice);

router.post("/invoice/save", saveInvoice);

router.post('/invoice/update', updateInvoice);

router.post('/invoice/delete', deleteInvoice)

module.exports = router;