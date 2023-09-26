const express = require("express");
const Postt = require("../models/Postt");

const router = express.Router();

//add post
router.post("/add", async (req, res) => {
    try {
        const { name, category, picture, description, coordinates } = req.body;
        const newPost = new Postt({name, category, picture, description, coordinates});
        await newPost.save();
        res.status(200).send({msg : "Post added successfully..",newPost})
    } catch (error) {
        res.status(400).send({msg : "Adding post failed..",error});
    }
});

// get all posts
router.get("/all", async (req, res) => {
    try {
        const allPosts = await Postt.find()
        res.status(200).send({msg : "This is the list of all the posts..",allPosts})
    } catch (error) {
        res.status(400).send({msg : "Cannot get the list of all the posts!!!",error});
    }
});

// get one post
router.get("/:id", async (req, res) =>{
    try {
        const postToGet = await Postt.findOne({_id: req.params.id});
        res.status(200).send({ msg : "This is the post you want",postToGet})
    } catch (error) {
        res.status(400).send({msg : "Cannot get this post!!!",error});
    }
});

// delete post
router.delete("/:id", async (req, res) => {
    try {
        const {_id} = req.params;
        await Postt.findOneAndDelete({_id});
        res.status(200).send({ msg : "Post deleted successfully.."})
    } catch (error) {
        res.status(400).send({msg : "Cannot delete this post!!!",error});
    }
});

// edit post
router.put("/:id", async (req, res) =>{
    try {
        const {_id} = req.params;
        const result = await Postt.updateOne({_id},{$set:{...req.body}});
        res.status(200).send({ msg : "Post updated successfully.."})
    } catch (error) {
        res.status(400).send({msg : "Cannot update this post!!!",error});
    }
});

module.exports = router;