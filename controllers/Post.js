const aysncHandler = require('express-async-handler')
const Post = require('../models/Post')

const getPosts = aysncHandler(async (req, res) => {
    const post = await Post.find()
    res.status(200).json({ post })
})

const getPostId = aysncHandler(async (req, res) => {
    const { id } = req.params
    if(!id) {
        res.status(400)
        throw new Error('Please Add a Referrence ID')
    }

    const post = await Post.findById(id)
    res.status(200).json(post)
})

const createPost = aysncHandler(async (req, res) => {
    if(!req.body.title || ! req.body.description) {
        res.status(400)
        throw new Error('Please Add A Field')
    }
    
    const post = await Post.create({
        title: req.body.title,
        description: req.body.description
    })

    res.status(200).json(post)
})

const updatePost = aysncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post) {
        res.status(400)
        throw new Error('Post Not Found')
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id,
        req.body, {
            new: true
        })

    res.status(200).json(updatedPost)
})

const deletePost = aysncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post) {
        res.status(400)
        throw new Error('Post Not Found')
    }

    await Post.findByIdAndDelete(req.params.id)
    res.status(200).json(`Deleted Post ID: ${req.params.id}`)
})

module.exports = {
    getPosts,
    getPostId,
    createPost,
    updatePost,
    deletePost
}