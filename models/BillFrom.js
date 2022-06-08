const { DataTypes, UUID, UUIDV4 } = require('sequelize');
const { db } = require('../lib/db');

const BillFrom = db.define('billFrom', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
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

BillFrom.sync({ force: false }).then(() => {
  console.log('BillFrom Model Synced');
});

module.exports = BillFrom;
