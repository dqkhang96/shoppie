import {
    StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../sizes';


const styles = StyleSheet.create({
    RecentSearches: {
        flexDirection: "row",
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    ItemRecentSearch: {
        marginRight: 10,
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#eaeaea'
    },
    ItemCategory: {
        marginRight: 10,
        height: 28,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#eaeaea',
        justifyContent: 'center'
    },
    renderItemRecommend:{
        height: 150, 
        width: 140, 
        borderWidth: 1,         
        borderColor: '#eaeaea', 
        backgroundColor: '#F6F6F6', 
        justifyContent: 'flex-end',
    },
    Brand:{
        height: 35, width: 90, backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: -25,
        left:25,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    Information:{
        
        width: 138,
        backgroundColor: '#FFFFFF',
        alignContent:'center',
    }
    ,
    text:{
        textAlign: 'center',
        marginTop: 5,
        fontSize:Size.Text.normal
    },
    sectiontitle:{
        fontWeight: 'bold',
        fontSize:Size.Text.sectionTitle 
    }
})

export default styles;