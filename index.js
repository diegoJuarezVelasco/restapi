const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const url = "mongodb+srv://diegojv:Montypython5302@marvel.lsbia.mongodb.net/restapi?retryWrites=true&w=majority"
//connecting to mongo
mongoose.Promise = global.Promise;

mongoose.connect(url, {
    useNewUrlParser: true
});

//Enable cors
app.use(cors());

//Enable express.json
app.use(express.json({extend: true}));

//app routes
app.use('/', routes());

app.listen(5000);