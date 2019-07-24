const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const Username = require('../models/username');

//INDEX ROUTE
router.get('/', async (req, res) => {
    try{
        const foundPost = await Post.find().populate('username')
        res.render('photo/index.ejs', {
        post: foundPost
    });
    }catch(error){
        res.send(error);
    }
});

//NEW ROUTE
router.get('/new', async (req, res) => {
    const username = await Username.find() 
    res.render('photo/new.ejs', {
        username: username
    });
})

//SHOW ROUTE
router.get('/:id', async (req, res) => {
    try{
        const showPost = await Post.findById(req.params.id).populate('username')
        res.render('photo/show.ejs', {
        post: showPost
    });
    }catch(error){
        res.send(error);
    }
});

//DELETE ROUTE
router.delete('/:id', async (req, res) => {
    try {
        await Post.findOneAndDelete(req.params.id);
        res.redirect('/post');
    } catch(err){
        res.send(err);
    }
});

//EDIT ROUTE
router.get('/:id/edit', async (req, res) => {
    try{
        const foundPost = await Post.findById(req.params.id);
        res.render('photo/edit.ejs', {
        post: foundPost 
        })
    }catch(err){
        res.send(err);
    }
});

//UPDATE ROUTE
router.put('/:id', async (req, res) => {
    try{ 
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/post');
    }catch(err) {
        res.send(err);
    }
});

//CREATE ROUTE
router.post('/', (req, res) => {
    Post.create(req.body, (err, createdPost) => {
        console.log(createdPost)
        if(err) {
            res.send(err)
        } else {
            res.redirect('/post');
        }
    })
})


module.exports = router;