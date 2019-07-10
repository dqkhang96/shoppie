import {StyleSheet} from 'react-native'
import {Size,sp} from '../../sizes'
const SIZE_ITEM = sp(12)

export default styles = StyleSheet.create({
    item: {
        height: SIZE_ITEM,
        width: SIZE_ITEM,
        borderRadius: SIZE_ITEM / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: sp(3.5)
    },
    itemNotPicked: {
        borderWidth: 1,
        borderColor: "gray"
    },
    sizeItemPicked: {
        height:SIZE_ITEM,
        width:SIZE_ITEM,
        justifyContent:'center',
        alignItems:'center'
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: SIZE_ITEM,
        width: SIZE_ITEM,
    },
    textSizePicked: {
        fontSize: Size.Text.normal,
        color: 'white',
    },
    textSizeNotPicked: {
        fontSize: Size.Text.normal
    }
})