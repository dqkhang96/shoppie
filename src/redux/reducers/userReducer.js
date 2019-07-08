import {
  LOGINFB, LOGINGG, LOGINNORMAL, LOGOUT,
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
    case LOGINFB:
      return {
        ...state,
        isLogin: true,
        name: action.user.name,
        username: action.user.username,
        email: action.user.email,
        avatar: action.user.picture.data.url,
        accessToken: action.token,
      };

    case LOGINGG:
      return {
        ...state,
        isLogin: true,
        name: action.user.name,
        username: action.user.username,
        email: action.user.email,
        avatar: action.user.photo,
        accessToken: action.idToken,
      };

    case LOGINNORMAL:
      return {
        ...state,
        isLogin: true,
        name: action.user.name,
        username: action.user.username,
        email: action.user.email,
        accessToken: action.Token,
      }

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}