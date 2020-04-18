const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routers');
require('dotenv').config();
const port = process.env.PORT || 3000;
require('./db/db');

const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
// app.use(helmet());

app.use('/api/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
