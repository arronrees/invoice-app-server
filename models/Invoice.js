const { DataTypes, UUID, UUIDV4 } = require('sequelize');
const { db } = require('../lib/db');

const Invoice = db.define('invoice', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  invoiceDate: {
    type: DataTypes.DATEONLY,
  },
  paymentTerms: {
    type: DataTypes.ENUM('30', '60', '90'),
  },
  invoiceDescription: {
    type: DataTypes.STRING(1024),
  },
  billFromId: {
    type: UUID,
  },
  billToId: {
    type: UUID,
  },
  totalCost: {
    type: DataTypes.INTEGER,
  },
});

Invoice.sync({ force: false }).then(() => {
  console.log('Invoice Model Synced');
});

module.exports = Invoice;
