require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

const { db } = require('./lib/db');

// middleware
app.use(morgan('tiny'));

app.use('*', (req, res) => {
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
