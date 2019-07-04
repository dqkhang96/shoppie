import { Dimensions,PixelRatio } from 'react-native'


export const HEIGHT_SCREEN = Dimensions.get('window').height
export const WIDTH_SCREEN = Dimensions.get('window').width

const smallSize=()=>{
    return (HEIGHT_SCREEN < WIDTH_SCREEN)?HEIGHT_SCREEN:WIDTH_SCREEN
}
const largeSize=()=>{
    return (HEIGHT_SCREEN < WIDTH_SCREEN)?WIDTH_SCREEN:HEIGHT_SCREEN
}
export const sp = (percel) => {
    const p = parseFloat(percel, 10)

    return PixelRatio.roundToNearestPixel(smallSize() * p / 100)
    
}

export const lp = (percel) => {
    const p = parseFloat(percel, 10)
    
    return PixelRatio.roundToNearestPixel(largeSize() * p / 100)
}

export const wp = (percel) => {
    const p = parseFloat(percel, 10)
    return PixelRatio.roundToNearestPixel(WIDTH_SCREEN * p / 100)
}

export const hp = (percel) => {
    const p = parseFloat(percel, 10)
    return PixelRatio.roundToNearestPixel(HEIGHT_SCREEN * p / 100)
}

export const normalize= (size)=>{
    const scale=smallSize()/320
    return PixelRatio.roundToNearestPixel(scale*size)
}