import {StyleSheet} from 'react-native'
import {Size,sp,wp} from '../../sizes'

export default styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    listCircleView: {
        padding: Size.Section.padding,
    },
    newArrival: {
        padding: Size.Section.padding
    },
    cardArrival: {
        width: sp(45),
        padding: Size.Section.padding,
        alignItems:'center',
        justifyContent:'center'
    },
    textNewArrival: {
        fontSize:Size.Text.sectionTitle,
        marginBottom: Size.Section.Margin.bottom
    },
    hotBrands: {
        padding: Size.Section.padding
    },
    textHotBrand: {
        textAlign: 'center',
        marginBottom: Size.Title.Margin.bottom,
        fontSize: Size.Text.sectionTitle
    },
    hotBrandCard: {
        width: wp(28),
        marginBottom: sp(2)
    },
    trendings: {
        padding:Size.Section.padding
    },
    trendingCard: {
        width:wp(60)
    },
    trendingText: {
        fontSize: Size.Text.sectionTitle,
        marginBottom: Size.Section.Margin.bottom
    },
    newSessionStyle:{
        padding:Size.Section.padding,
    },
    newSessionStyleText:{
        fontSize:Size.Text.sectionTitle
    },
    nSSContainer:{
        padding:Size.Section.padding,
        borderWidth:1,
        borderColor:"#EEEEEE",
        justifyContent:'center',
        alignItems:'center'
    },
    nSSContent:{
        backgroundColor:'#EEEEEE',
        height:sp(60),
        width:wp(95)
    }
})