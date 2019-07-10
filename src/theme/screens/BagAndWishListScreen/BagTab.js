import { StyleSheet } from 'react-native'
import {Size,wp} from '../../sizes';
import Color from '../../colors';


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea'
    },
    coupons: {
        padding: Size.Section.padding,
        backgroundColor: 'white',
        marginBottom: Size.Section.Margin.bottom
    },
    titleCoupons: {
        fontSize: Size.Text.sectionTitle,
        marginBottom: Size.Text.Margin.bottom
    },
    inputViewCoupons: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
        borderRadius: 4,
    },
    inputCoupons: {
        height: Size.TextInput.height,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        paddingLeft: Size.Icon.width * 2,
        width: (wp(100) - 2 * Size.Section.padding) * 0.7,
        borderRightWidth: 0,
        fontSize: Size.Text.normal,
        borderRadius: 4
    },
    buttonCoupons: {
        width: (wp(100) - 2 * Size.Section.padding) * 0.3,
        height: Size.TextInput.height,
        borderWidth: 1,
        borderColor: Color.primary,
    },
    iconPercel: {
        position: 'absolute',
        left: Size.Icon.width / 2,
        height: Size.Icon.height,
        width: Size.Icon.width
    },

    gift: {
        padding: Size.Section.padding,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: Size.Section.Margin.bottom
    },
    giftText: {
        fontSize: Size.Text.normal,
        marginLeft: Size.Text.Margin.bottom
    },
    giftContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    goGift: {
        height: Size.Icon.height,
        width: Size.Icon.width
    },
    orderSummaryContainer: {
        padding: Size.Section.padding,
        backgroundColor: 'white'
    },
    orderSummaryTitle: {
        fontSize: Size.Text.sectionTitle,
        marginBottom: Size.Section.Margin.bottom
    },
    orderSummaryContent: {
        borderWidth: 1,
        borderColor: "#E1E1E1",
        borderRadius: 6,
        paddingHorizontal: Size.Section.padding
    },
    orderSummaryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
    devideDash: {
        width: "100%",
        borderColor: "#E1E1E1",
        borderBottomWidth: 1,
        borderStyle: 'dotted'
    },
    summaryTitle: {
        fontSize: Size.Text.sectionTitle
    },
    summaryValue: {
        fontSize: Size.Text.sectionTitle
    },
    viewPlaceOrder:{
        flexDirection:'row'
    },
    totalPriceOrder:{
        width:wp(30),
        justifyContent:'center'
    },
    textTotalPriceOrder:{
        textAlign:'center',
        fontSize:Size.Text.normal
    },
    buttonPlaceOrder:{
        height:Size.Button.height ,
        width:wp(70),
        fontSize:Size.Text.normal
    }
})