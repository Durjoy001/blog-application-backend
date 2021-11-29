
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const blogRouter = require('./routes/blogRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
//app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1/blogs',blogRouter);
app.use('/api/v1/users',userRouter);

if(process.env.NODE_ENV ==='production'){  
    app.use(express.static('build'));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'build','index.html'));
    })
}
module.exports = app; 
