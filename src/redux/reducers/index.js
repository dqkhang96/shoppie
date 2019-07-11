import {combineReducers} from 'redux';
import currentIndexReducer from './currentIndexReducer';
import inputFocusReducer from './inputFocusReducer';
import userReducer from './userReducer';
import wishlistReducer from './wishlistReducer.js'
import bagReducer from './bagReducer'
import appReducer from './appReducer'

export default combineReducers({
  currentIndex: currentIndexReducer,
  user: userReducer,
  inputFocus: inputFocusReducer,
  wishList:wishlistReducer,
  cart: bagReducer,
  app:appReducer
});