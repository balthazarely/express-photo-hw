const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//this is the schema
const usernameSchema = new mongoose.Schema({
    username: String,
})

const Username = mongoose.model("Username", usernameSchema);

module.exports = Username;