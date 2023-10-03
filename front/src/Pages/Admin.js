import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../JS/Actions/post';

const Admin = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.title}
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
