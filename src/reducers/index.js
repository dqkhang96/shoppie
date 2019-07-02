import {combineReducers} from 'redux';
import currentIndexReducer from './currentIndexReducer';
import stepsColorReducer from './stepsColorReducer';
import inputFocusReducer from './inputFocusReducer';

export default combineReducers({
  currentIndex: currentIndexReducer,
  stepsColor: stepsColorReducer,
  inputFocus: inputFocusReducer,
});