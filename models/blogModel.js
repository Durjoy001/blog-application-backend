const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'A blog must have a name'],
        unique: true
    },
    description: {
        type: String,
        required: [true]
    },
    time: {
        type: String,
        required: [true,'A blog must have a time']
    }
});

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;