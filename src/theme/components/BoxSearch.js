import {StyleSheet} from 'react-native'
import {sp,wp} from '../sizes'

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: sp(3.5),
        width: wp(75)
    },
    input: {
        marginRight: sp(3.5),
        width: wp(60)
    },
    searchIcon:{
        marginRight:sp(5)
    }
})