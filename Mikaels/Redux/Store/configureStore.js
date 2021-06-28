import {createStore, combineReducers, applyMiddleware} from 'redux';
import listTaskReducer from '../Reducer/reducer';

import thunk from 'redux-thunk';
const configureStore = () => {
  return createStore(listTaskReducer, applyMiddleware(thunk));
};
export default configureStore;
