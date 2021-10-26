const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
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

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}....`);
});