const { DataTypes, UUID, UUIDV4 } = require('sequelize');
const { db } = require('../lib/db');

const InvoiceItem = db.define('invoiceItem', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  itemName: {
    type: DataTypes.STRING(1024),
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  total: {
    type: DataTypes.INTEGER,
  },
});

InvoiceItem.sync({ force: false }).then(() => {
  console.log('InvoiceItem Model Synced');
});

module.exports = InvoiceItem;
