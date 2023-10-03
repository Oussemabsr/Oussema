import { ADD_POST, EDIT_POST, DELETE_POST, GET_POST_BY_ID } from '../ActionTypes/add';

const initialState = {
  posts: [],
  postById: null
};

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case EDIT_POST:
      const updatedPosts = state.posts.map((post) =>
        post.id === action.payload.postId ? action.payload.updatedPostData : post
      );
      return {
        ...state,
        posts: updatedPosts,
      };
    case DELETE_POST:
      const filteredPosts = state.posts.filter((post) => post.id !== action.payload);
      return {
        ...state,
        posts: filteredPosts,
      };
      case GET_POST_BY_ID:
        return {
          ...state, postById: action.payload
        }
    default:
      return state;
  }
};

export default addReducer;
