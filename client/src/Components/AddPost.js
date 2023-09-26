import React, { useState } from 'react';

const AddPost = () => {
  const [post, setPost] = useState({
    name: '',
    category: '',
    picture: null,
    description: '',
    coordinates: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handlePictureChange = (e) => {
    setPost({ ...post, picture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the form submission and add the post
    console.log(post);
    // Reset the form fields after submission
    setPost({
      name: '',
      category: '',
      picture: null,
      description: '',
      coordinates: '',
    });
  };

  return (
    <div>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Post Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={post.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={post.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="picture">Picture:</label>
          <input
            type="file"
            id="picture"
            name="picture"
            onChange={handlePictureChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={post.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="coordinates">Coordinates:</label>
          <input
            type="text"
            id="coordinates"
            name="coordinates"
            value={post.coordinates}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
