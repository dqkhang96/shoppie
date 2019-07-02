import {
  ENABLE1, ENABLE2, ENABLE3, ENABLE4, ENABLE5,
  TO1STEP, TO2STEP, TOBACKSTEP, TONEXTSTEP,
  FOCUSEMAIL, FOCUSPASSWORD, FOCUSMOBILE, FOCUSNAME,
  NOTFOCUSEMAIL, NOTFOCUSPASSWORD, NOTFOCUSMOBILE, NOTFOCUSNAME,
} from './type';
export const enable1 = () => ({ type: ENABLE1 });
export const enable2 = () => ({ type: ENABLE2 });
export const enable3 = () => ({ type: ENABLE3 });
export const enable4 = () => ({ type: ENABLE4 });
export const enable5 = () => ({ type: ENABLE5 });

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