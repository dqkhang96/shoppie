import {
    StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../sizes';


const styles = StyleSheet.create({
    cvv: {
        height: 45,
        marginLeft: 5,
        width: 65,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        borderColor: '#eaeaea'
    },
    totalpayable: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    divide: {
        height: 0,
        width: '100%',
        borderBottomWidth: 0.8,
        borderColor: '#eaeaea',
        marginTop: 5
    },
    buttongradient: {
        height: 40,
        width: SCREEN_WIDTH * 0.4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    viewdetail: {
        backgroundColor: '#FFFFFF',
        width: SCREEN_WIDTH,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    paymentitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    pay: {
        backgroundColor: '#FFFFFF',
        width: SCREEN_WIDTH,
        padding: 10, flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imagebackground: {
        height: 50,
        width: '100%',
        elevation: 10,
        justifyContent: 'center'
    }
})

export default styles;