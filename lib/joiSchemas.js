const Joi = require('joi');

module.exports.joiNewInvoice = Joi.object({
  billFrom: Joi.object({
    streetAddress: Joi.string().required(),
    city: Joi.string().required(),
    postcode: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
  billTo: Joi.object({
    clientName: Joi.string().required(),
    clientEmail: Joi.string().email().required(),
    streetAddress: Joi.string().required(),
    city: Joi.string().required(),
    postcode: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
  invoiceItems: Joi.array()
    .items(
      Joi.object({
        itemName: Joi.string().required(),
        quantity: Joi.number().required(),
        price: Joi.number().required(),
        total: Joi.number().required(),
      }).required()
    )
    .required(),
  invoice: Joi.object({
    invoiceDate: Joi.date().required(),
    paymentTerms: Joi.string().required(),
    invoiceDescription: Joi.string().required(),
  }).required(),
}).required();
