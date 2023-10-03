// controllers/postController.js

const Post = require('../models/post');

// Controller function for creating a new post
const createPost = async (req, res) => {
  try {
    // Extract the relevant fields from the request body
    const { name, category, picture, description, coordinates } = req.body;

    // Create a new post with the extracted fields
    const newPost = new Post({
      name,
      category,
      picture, // Assuming 'picture' is the URL of the image
      description,
      coordinates,
    });

    // Save the new post to the database
    await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Server Error', details: error.message });
  }
};

module.exports = { createPost };


