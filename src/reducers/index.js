import {combineReducers} from 'redux';
import currentIndexReducer from './currentIndexReducer';
import inputFocusReducer from './inputFocusReducer';
import userReducer from './userReducer';

export default combineReducers({
  currentIndex: currentIndexReducer,
  user: userReducer,
  inputFocus: inputFocusReducer,
});