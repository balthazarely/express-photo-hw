const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//this is the schema
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    createdAt: {type: Date, default: Date.now},
    photo: {type: String, required: true},
    comments:String,
    username: {
        type: Schema.Types.ObjectId,
        ref: "Username"
    }
})


const Post = mongoose.model("Post", postSchema);

module.exports = Post;