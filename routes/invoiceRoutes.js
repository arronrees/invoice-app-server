const { postCreateInvoice } = require('../controllers/invoiceController');

const router = require('express').Router();

router.post('/invoice/create', postCreateInvoice);

module.exports = router;
