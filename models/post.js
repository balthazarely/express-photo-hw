const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//this is the schema
const postSchema = new mongoose.Schema({
    title: String,
    date: Date,
    photo: String,
    comments:String,
    username: {
        type: Schema.Types.ObjectId,
        ref: "Username"
    }
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;