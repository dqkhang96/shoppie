import {StyleSheet} from 'react-native'
import {sp,Size} from '../sizes'

export default styles = StyleSheet.create({
    adContainer: {
        padding: Size.Section.padding,
        marginBottom: Size.Section.Margin.bottom,
    },
    adContent: {
        borderWidth: 1,
        borderColor: 'gray',
        padding:5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bodyAd: {
        width: "100%",
        flexDirection: 'row'
    },
    itemAd: {
        width: "50%",
        height: sp(40)
    },
    titleAd: {
        backgroundColor: 'white',
        position: 'absolute',
        padding: sp(1.5),
        bottom: 10,
        alignItems: 'center',
        width: sp(80)
    },
    largeAdText: {
        fontSize: Size.Text.pageTitle,
        textAlign: 'center',
        marginBottom: sp(1)
    },
    smallAdText: {
        fontSize: Size.Text.normal*0.8,
        color: 'gray',
        textAlign: 'center'
    },
})