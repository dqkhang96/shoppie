import { StyleSheet } from 'react-native'
import Size, { wp, sp } from '../../sizes';
import Color from '../../colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Size.Section.padding,
        marginBottom: Size.Section.Margin.bottom,
        backgroundColor: 'white'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Size.Section.Margin.bottom
    },
    image: {
        height: sp(30),
        width: wp(25),
        marginRight: sp(3),
        backgroundColor: '#eeeeee'
    },
    infor: {

    },
    title: {
        fontSize: Size.Text.sectionTitle,
        marginBottom: Size.Text.Margin.bottom
    },
    name: {
        fontSize: Size.Text.normal,
        color: 'gray',
        marginBottom: Size.Text.Margin.bottom
    },
    groupViewInputSelect: {
        flexDirection: 'row',
        marginBottom: Size.Text.Margin.bottom
    },
    viewInputSelect: {
        flexDirection: 'row',
        marginRight: Size.Text.Margin.right,
        alignItems: 'center'
    },
    labelInput: {
        color: 'gray',
        fontSize: Size.Text.normal,
        marginRight:Size.Text.Margin.right
    },
    menuItem:{
        fontSize:Size.Text.normal
    },
    selectButton:{
        borderRadius:5,
        borderWidth:1,
        minWidth:Size.Text.normal*3,
        paddingHorizontal:5,
        borderColor:'#eaeaea',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    selectButtonLabel:{
        fontSize:Size.Text.normal,
        marginRight:Size.Text.Margin.right/2
    },
    picker: {
        height: Size.Button.height,
        fontSize: Size.Text.normal,
        borderColor: "#eeeeee",
        borderRadius: 5
    },
    price: {
        fontSize: Size.Text.normal
    },
    rootPrice: {
        fontSize: Size.Text.normal*0.9,
        textDecorationLine: 'line-through',
        marginLeft: Size.Text.Margin.left
    },
    saleOff: {
        fontSize: Size.Text.normal,
        color: Color.primary,
        marginLeft: Size.Text.Margin.left
    },
    gift: {
        fontSize: Size.Text.normal,
        color: "#707070",
        marginBottom: Size.Text.Margin.bottom
    },
    devide: {
        width: "100%",
        height: 0,
        borderWidth: 1,
        borderColor: '#eaeaea',
    },
    offer: {
        paddingVertical: Size.Section.padding,
        flexDirection: 'row',
        alignItems: "center"
    },
    titleOffer: {
        fontSize: Size.Text.normal,
        color: "#707070",
        marginLeft: Size.Text.Margin.left
    },
    viewPrice: {
        flexDirection: "row",
        alignItems: 'center'
    }
})