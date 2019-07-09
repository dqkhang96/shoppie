import { Dimensions } from 'react-native'
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const HEIGHT_SCREEN = Dimensions.get("window").height;
export const WIDTH_SCREEN = Dimensions.get("window").width;
export const sp = (percel) => {
    const p = parseFloat(percel, 10)
    if (SCREEN_HEIGHT < SCREEN_WIDTH)
        return SCREEN_HEIGHT * p / 100
    else return SCREEN_WIDTH * p / 100
  }
  
  export const lp = (percel) => {
    const p = parseFloat(percel, 10)
    if (SCREEN_HEIGHT > SCREEN_WIDTH)
        return SCREEN_HEIGHT * p / 100
    else return SCREEN_WIDTH * p / 100
  }
  
  export const wp = (percel) => {
    const p = parseFloat(percel, 10)
    return SCREEN_WIDTH * p / 100
  }