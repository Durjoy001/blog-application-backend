const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

const express = require('express')
require('dotenv').config();

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log('DB connection successful!!!');
});

const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';



app.listen(port,host, () => {
    console.log(`App running on port ${port}....`);
});