const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);
require('./models/List');

const app = express();
require('./routes/routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
