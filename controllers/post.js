const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//INDEX ROUTE
router.get('/', (req, res) => {
    Post.find({}, (err, foundPost) => {
        if(err) {
            res.send(err);
        } else {
            console.log(foundPost);
            res.render('photo/index.ejs', {
                post: foundPost
            });
        }
    });
});

//NEW ROUTE
router.get('/new', (req, res) => {
    res.render('photo/new.ejs');
})

//SHOW ROUTE
router.get('/:id', (req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
        res.render('photo/show.ejs', {
            post: foundPost
        })
    })
})

//CREATE ROUTE
router.post('/', (req, res) => {
    Post.create(req.body, (err, createdPost) => {
        if(err) {
            res.send(err)
        } else {
            console.log(createdPost, "<--post created");
            res.redirect('/post');
        }
    })
})


module.exports = router;