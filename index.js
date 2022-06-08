require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const invoiceRoutes = require('./routes/invoiceRoutes');

const app = express();

const { db } = require('./lib/db');

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));

// routes
app.use(invoiceRoutes);

app.use((req, res) => {
  res.send('Hello');
});

// connect to db then start server
db.authenticate()
  .then(() => {
    console.log('DB Connected');

    app.listen(7777, () => {
      console.log('Server running on port 7777');
    });
  })
  .catch((err) => {
    console.error(err);
  });
