import {StyleSheet} from 'react-native'
import {sp} from '../../sizes'

export default styles= StyleSheet.create({
    listColors: {
        flexDirection: 'row',
    },
    pickColor: {
        padding: 5,
        borderWidth: 1.5,
        height: sp(20),
        width: sp(18),
        marginRight: sp(4),
        borderRadius: sp(1.2)
    },
    color: {
        height: "100%",
        width: "100%",
        borderRadius: sp(1)
    },
})