import {createStore, combineReducers} from 'redux';
import countReducer from '../Reducer/reducer';
const configureStore = () => {
  return createStore(countReducer);
};
export default configureStore;
