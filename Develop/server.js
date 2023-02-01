/* eslint-disable linebreak-style */
const express = require('express');
const apiRoutes = require('./routes');
const data = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(apiRoutes);

data.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
