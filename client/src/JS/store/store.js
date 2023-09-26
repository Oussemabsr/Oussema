import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers/index'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
