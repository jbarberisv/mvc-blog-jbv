const path = require('path');
const helpers = require('./utils/helpers');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Listening'));
});