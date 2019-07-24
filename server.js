const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

//require the database
require('./db/db');

const postController = require('./controllers/post');
const usernameController = require('./controllers/username');

app.use(bodyParser.urlencoded({extended: false}));
//method overrride is looking for a query string that has a question mark. ?_method  
app.use(methodOverride('_method'));

app.use('/post', postController);
app.use('/username', usernameController);

//Links the css to the server.
app.use(express.static('public'));


//added the app to port 3000
app.listen(3000, () => {
    console.log("the server is listening....")
})