import axios from 'axios';
import { ADD_POST, EDIT_POST, DELETE_POST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../ActionTypes/add';

// Action to add a new post
export const addPost = (newPostData) => async (dispatch) => {
  try {
    const result = await axios.post('/api/postt/add', newPostData); // Updated URL
    dispatch({ type: ADD_POST, payload: result.data });
  } catch (error) {
    console.error('Error adding post:', error);
  }
};


// Action to edit a post
export const editPost = (postId, updatedPostData) => async (dispatch) => {
  try {
    const result = await axios.put(`/api/posts/${postId}`, updatedPostData);
    dispatch({ type: EDIT_POST, payload: { postId, updatedPostData: result.data } });
  } catch (error) {
    console.error('Error editing post:', error);
  }
};

// Action to delete a post
export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${postId}`);
    dispatch({ type: DELETE_POST, payload: postId });
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};

// Action to fetch posts
export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/postt/all'); // Update the URL to match your API endpoint
    const posts = response.data.allPosts; // Assuming the API response contains an array of posts
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
};

// Action to fetch posts by id
export const getPostById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/postt/annonceDetail/${id}`); // Update the URL to match your API endpoint
    const posts = response.data; // Assuming the API response contains an array of posts
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
};