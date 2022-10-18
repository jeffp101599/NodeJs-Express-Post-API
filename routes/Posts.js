const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const { getPosts, 
        getPostId, 
        createPost, 
        updatePost, 
        deletePost } 
        = require('../controllers/Post')

router.route('/').get(getPosts).post(createPost)
router.route('/:id').get(getPostId).patch(updatePost).delete(deletePost)       

module.exports = router