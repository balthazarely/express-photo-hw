const mongoose = require('mongoose');

//this is the schema
const postSchema = new mongoose.Schema({
    title: String,
    username: String,
    date: Date,
    photo: String,
    comments:String
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;