const Invoice = require('../models/Invoice');
const BillFrom = require('../models/BillFrom');
const BillTo = require('../models/BillTo');
const InvoiceItem = require('../models/InvoiceItem');

const { joiNewInvoice } = require('../lib/joiSchemas');

module.exports.postCreateInvoice = async (req, res, next) => {
  const { body } = req;
  const { invoice, invoiceItems, billTo, billFrom } = body;

  // validate request body
  const { error } = joiNewInvoice.validate(body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, error: 'Please fill out all the details' });
  }

  // request body good

  // work out total cost
  let totalInvoiceCost = 0;

  invoiceItems.forEach((item) => {
    totalInvoiceCost += parseFloat(item.total);
  });

  // create invoice
  const newInvoice = await Invoice.create({
    ...invoice,
    totalCost: totalInvoiceCost,
  });

  // create invoice components
  const newBillTo = await BillTo.create(billTo);
  const newBillFrom = await BillFrom.create(billFrom);

  for (let i = 0; i < invoiceItems.length; i++) {
    const item = invoiceItems[i];

    const newInvoiceItem = await InvoiceItem.create({
      ...item,
      invoiceId: newInvoice.id,
    });
  }

  // save ids to link each item
  newInvoice.billFromId = await newBillFrom.id;
  newInvoice.billToId = await newBillTo.id;

  newInvoice.save();

  res.status(200).json({ success: true });
};
