// // models/Post.js

// const mongoose = require('mongoose');

// // Define the schema for the Post model
// const postSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   picture: {
//     type: String, // You can store the image URL as a string
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   coordinates: {
//     type: String, // You can store the coordinates as a string
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now, // Automatically set the date to the current date and time
//   },
// });

// // Create the Post model using the schema
// const Post = mongoose.model('Post', postSchema);

// module.exports = Post;
