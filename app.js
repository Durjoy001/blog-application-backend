
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const blogRouter = require('./routes/blogRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1/blogs',blogRouter);
app.use('/api/v1/users',userRouter);


module.exports = app; 
