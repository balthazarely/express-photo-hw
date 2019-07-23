const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//INDEX ROUTE
router.get('/', (req, res) => {
    Post.find({}, (err, foundPost) => {
        if(err) {
            res.send(err);
        } else {
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

//DELETE ROUTE
router.delete('/:id', (req, res) => {
    Post.findOneAndDelete(req.params.id, (err, response) => {
        if(err) {
            res.send(err);
        } else {
            console.log(response, "<- this is the delete route");
            res.redirect('/post');
        }
    })
})

//EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
        if(err) {
            res.send(err);
        } else {
            res.render('photo/edit.ejs', {
                post: foundPost 
            })
        }
    })
})

//UPDATE ROUTE
router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, (err, updatePost) => {
        if(err) {
            res.send(err);
        } else {
            console.log(updatePost, "< put route response from db");
            res.redirect('/post/' + req.params.id);
        }
    })
})

//CREATE ROUTE
router.post('/', (req, res) => {
    Post.create(req.body, (err, createdPost) => {
        if(err) {
            res.send(err)
        } else {
            res.redirect('/post');
        }
    })
})


module.exports = router;