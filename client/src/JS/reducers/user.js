import { LOAD_USER } from "../actionTypes/user";
import { SUCC_USER, FAIL_USER, LOGOUT_USER, CURRENT_USER } from "../actionTypes/user";

const initialState = {
  user: null,
  loadUser: false,
  error: [],
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
        return {...state, loadUser:true};
    case SUCC_USER:
      localStorage.setItem ("token, payload.token");
      return { ...state, loadUser: false, user: action.payload.user, isAuth: true,  };
    case CURRENT_USER:
      return {...state, user: action.payload, loadUser: false, isAuth: true,  };
    case FAIL_USER:
      return {
        ...state, loadUser: false, error: action.payload, };
    case LOGOUT_USER:
        localStorage.removeItem("token");
      return { user: null, loadUser: false, error: [],  isAuth: false,};
    default:
      return state;
  }
};

export default userReducer;
