import {
  LOGIN, LOGOUT,
} from '../actions/type';

const initialState = {
  name: '',
  username: '',
  email: '',
  avatar: '',
  accessToken: '',
  isLogin: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    case LOGOUT:
      return {
        ...state,
        isLogout: false,
      };

    default:
      return state;
  }
}