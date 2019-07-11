import {StyleSheet} from 'react-native'
import Size from '../sizes';

export default styles = StyleSheet.create({
    container:{
        marginLeft: 10, flexDirection: 'row', 
        alignItems: "center", marginTop: 12, 
        justifyContent: "space-between", 
        marginBottom: 10 
    },
    content:{
        flexDirection: 'row', alignItems: 'center' 
    },
    label:{
        marginLeft: 10, fontWeight: 'bold',
        fontSize:Size.Text.normal 
    },
    icon:{
        height:Size.Icon.height,
        width:Size.Icon.width
    }
})