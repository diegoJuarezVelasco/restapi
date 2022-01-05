const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const app = express();


//connecting to mongo
mongoose.Promise = global.Promise;

mongoose.connect(process.env.URL, {
    useNewUrlParser: true
});

//Enable cors
app.use(cors());

//Enable express.json
app.use(express.json({extend: true}));

//app routes
app.use('/', routes());

app.listen(5000);