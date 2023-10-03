// importation
import {combineReducers} from 'redux'
import userReducer from './user';
import postReducer from './post';
// create rootReducer
const rootReducer = combineReducers({ userReducer,postReducer})


// export
export default rootReducer;