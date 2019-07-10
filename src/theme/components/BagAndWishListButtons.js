import {StyleSheet} from 'react-native'
import {Header} from 'react-navigation'
import Size from '../sizes';

export default styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:Size.Section.padding
    },
    viewButton:{
        marginLeft:Header.HEIGHT*0.1,
        flexDirection:'row',
        alignItems:'center',
    }
})