
import axios from 'axios';
import { DELETE_POST } from '../ActionTypes/post';

export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${postId}`);
    dispatch({ type: DELETE_POST, payload: postId });
  } catch (error) {
    console.log('Error deleting post:', error);
  }
};
