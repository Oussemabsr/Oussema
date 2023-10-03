import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../ActionTypes/add';

const initialState = {
  posts: [],
  annonceList: [], // Separate state slice for annonces
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    case EDIT_POST:
      // You can implement the logic for editing a post here
      return state;
    case DELETE_POST:
      // You can implement the logic for deleting a post here
      return state;
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        annonceList: payload, // Update annonceList with fetched data
      };
    case FETCH_POSTS_FAILURE:
      // Handle the failure case if needed
      return state;
    default:
      return state;
  }
};

export default postReducer;

