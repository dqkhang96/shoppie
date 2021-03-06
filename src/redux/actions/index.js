import {
  TO1STEP, TO2STEP, TOBACKSTEP, TONEXTSTEP,
  FOCUSEMAIL, FOCUSPASSWORD, FOCUSMOBILE, FOCUSNAME,
  NOTFOCUSEMAIL, NOTFOCUSPASSWORD, NOTFOCUSMOBILE, NOTFOCUSNAME,REMOVE_FROM_CART,
  LOGINFB, LOGINGG, LOGINNORMAL, LOGOUT,LIKE_PRODUCT,REMOVE_LIKE_PRODUCT,ADD_TO_CART,SWITCH_LANGUAGE
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
export const likeProduct=(product)=>({
  type:LIKE_PRODUCT,
  product :product
})
export const removeLikeProduct=(id)=>({
  type:REMOVE_LIKE_PRODUCT,
  id:id
})
export const addToCart=(product)=>{
  return {
    type:ADD_TO_CART,
    product : product}
}

export const removeFromCart=(id)=>({
  type:REMOVE_FROM_CART,
  id
})

export const switchLanguage=(lang)=>({
  type:SWITCH_LANGUAGE,
  lang
})