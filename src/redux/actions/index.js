import {
  TO1STEP, TO2STEP, TOBACKSTEP, TONEXTSTEP,
  FOCUSEMAIL, FOCUSPASSWORD, FOCUSMOBILE, FOCUSNAME,
  NOTFOCUSEMAIL, NOTFOCUSPASSWORD, NOTFOCUSMOBILE, NOTFOCUSNAME,
  LOGINFB, LOGINGG, LOGINNORMAL, LOGOUT,
} from './type';

export const to1step = () => ({ type: TO1STEP });
export const to2step = () => ({ type: TO2STEP });
export const tonextstep = () => ({ type: TONEXTSTEP });
export const tobackstep = () => ({ type: TOBACKSTEP });

export const focusEmail = () => ({ type: FOCUSEMAIL });
export const focusPassword = () => ({ type: FOCUSPASSWORD });
export const focusName = () => ({ type: FOCUSNAME });
export const focusMobile = () => ({ type: FOCUSMOBILE });
export const notFocusEmail = () => ({ type: NOTFOCUSEMAIL });
export const notFocusPassword = () => ({ type: NOTFOCUSPASSWORD });
export const notFocusName = () => ({ type: NOTFOCUSNAME });
export const notFocusMobile = () => ({ type: NOTFOCUSMOBILE });

export const logInFB = (USER, TOKEN) => ({
  type: LOGINFB,
  user: USER,
  token: TOKEN,
});
export const logInGG = (USER) => ({
  type: LOGINGG,
  user: USER,
});
export const logInNormal = (USER) => ({
  type: LOGINNORMAL,
  user: USER,
});
export const logOut = () => ({ type: LOGOUT });