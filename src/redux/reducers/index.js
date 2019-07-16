import {combineReducers} from 'redux';
import CurrentIndexReducer from './CurrentIndexReducer';
import UserReducer from './UserReducer';
import WishlistReducer from './WishlistReducer.js'
import BagReducer from './BagReducer'
import AppReducer from './AppReducer'

export default combineReducers({
  currentIndex: CurrentIndexReducer,
  user: UserReducer,
  wishList:WishlistReducer,
  cart: BagReducer,
  app:AppReducer
});