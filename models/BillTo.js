const { DataTypes, UUID, UUIDV4 } = require('sequelize');
const { db } = require('../lib/db');

const BillTo = db.define('billTo', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  clientName: {
    type: DataTypes.STRING(1024),
  },
  clientEmail: {
    type: DataTypes.STRING(1024),
  },
  streetAddress: {
    type: DataTypes.STRING(1024),
  },
  city: {
    type: DataTypes.STRING(1024),
  },
  postcode: {
    type: DataTypes.STRING(1024),
  },
  country: {
    type: DataTypes.STRING(1024),
  },
});

BillTo.sync({ force: false }).then(() => {
  console.log('BillTo Model Synced');
});

module.exports = BillTo;
