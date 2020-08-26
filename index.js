const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const chalk = require('chalk');

const debug = require('debug')('app:server');

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('This is the home route v4 ' + user);
});

app.get('/contact', (req, res) => {
  res.send('This is the contact route');
});

app.listen(port, () => debug(`App running on: ${chalk.blue('http://localhost:' + port)}`));