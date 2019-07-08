import { Dimensions } from 'react-native'

export const HEIGHT_SCREEN = Dimensions.get('window').height
export const WIDTH_SCREEN = Dimensions.get('window').width

export const sp = (percel) => {
    const p = parseFloat(percel, 10)
    if (HEIGHT_SCREEN < WIDTH_SCREEN)
        return HEIGHT_SCREEN * p / 100
    else return WIDTH_SCREEN * p / 100
}

export const lp = (percel) => {
    const p = parseFloat(percel, 10)
    if (HEIGHT_SCREEN > WIDTH_SCREEN)
        return HEIGHT_SCREEN * p / 100
    else return WIDTH_SCREEN * p / 100
}

export const wp = (percel) => {
    const p = parseFloat(percel, 10)
    return WIDTH_SCREEN * p / 100
}

export const hp = (percel) => {
    const p = parseFloat(percel, 10)
    return HEIGHT_SCREEN * p / 100
}