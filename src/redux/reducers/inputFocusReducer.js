import {
  FOCUSEMAIL, FOCUSPASSWORD, FOCUSMOBILE, FOCUSNAME,
  NOTFOCUSEMAIL, NOTFOCUSPASSWORD, NOTFOCUSMOBILE, NOTFOCUSNAME,
} from '../actions/type';

const initialState = {
  name: false,
  email: false,
  password: false,
  mobile: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FOCUSEMAIL:
      return {
        ...state,
        email: true,
      };

    case FOCUSPASSWORD:
      return {
        ...state,
        password: true,
      };

    case FOCUSNAME:
      return {
        ...state,
        name: true,
      };

    case FOCUSMOBILE:
      return {
        ...state,
        mobile: true,
      };

    case NOTFOCUSEMAIL:
      return {
        ...state,
        email: false,
      };

    case NOTFOCUSPASSWORD:
      return {
        ...state,
        password: false,
      };

    case NOTFOCUSNAME:
      return {
        ...state,
        name: false,
      };

    case NOTFOCUSMOBILE:
      return {
        ...state,
        mobile: false,
      };

    default:
      return state;
  }
}