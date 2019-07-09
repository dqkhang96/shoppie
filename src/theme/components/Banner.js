import {StyleSheet} from 'react-native'
import {SCREEN_WIDTH,Size, sp} from '../sizes'

export default styles = StyleSheet.create({
    banner: {
        height: SCREEN_WIDTH*0.5/1.7,
        width: SCREEN_WIDTH,
    },
    backgroundBanner: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: SCREEN_WIDTH*0.5/1.7,
        width: SCREEN_WIDTH
    },
    contentBanner: {
        height: SCREEN_WIDTH*0.5/1.7,
        width: SCREEN_WIDTH,
        justifyContent: 'center'
    },
    lageTextBanner: {
        fontSize: Size.Text.pageTitle*3,
        color: 'white',
        textAlign: 'center'
    },
    smallTextBanner: {
        fontSize: Size.Text.sectionTitle*2.5,
        color: 'white',
        textAlign: 'center'
    },
})