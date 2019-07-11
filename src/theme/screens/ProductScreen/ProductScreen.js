import {StyleSheet} from 'react-native'
import {Size,wp,sp} from '../../sizes'
import Color from '../../colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.SectionScreen.background
    },
    priceInfor: {
        padding: Size.Section.padding,
        marginBottom: Size.Section.Margin.bottom,
        backgroundColor: 'white'
    },
    newLabelWrap: {
        height: Size.Text.normal*1.5,
        width:Size.Text.normal*5,
        borderColor: Color.primary,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: Size.Text.Margin.bottom
    },
    newLabel: {
        fontSize: Size.Text.normal,
        color: Color.primary
    },
    priceWrap: {
        flexDirection: 'row',
        marginBottom: Size.Text.Margin.bottom
    },
    price: {
        fontSize: Size.Text.sectionTitle,
        marginRight: Size.Text.Margin.right
    },
    priceRoot: {
        fontSize: Size.Text.normal,
        textDecorationLine: 'line-through',
        color: "#afafaf",
        marginRight: Size.Text.Margin.right
    },
    saleOff: {
        fontSize: Size.Text.normal,
        color: Color.primary
    },
    like: {
        position: 'absolute',
        top: Size.Section.padding*2,
        right: Size.Section.padding*2,
        height:Size.Icon.height,
        width:Size.Icon.width
    },
    colorPicker: {
        padding: Size.Section.padding,
        backgroundColor: 'white',
        marginBottom: Size.Section.Margin.bottom
    },
    titlePickColor: {
        fontSize: Size.Text.normal,
        marginBottom: Size.Title.Margin.bottom
    },
    
    sizePicker: {
        padding: Size.Section.padding,
        backgroundColor: 'white',
        marginBottom: Size.Title.Margin.bottom,
    },
    titleSizePicker: {
        fontSize: Size.Text.normal,
        marginBottom: Size.Title.Margin.bottom
    },
    title: {
        fontSize: Size.Text.normal,
        marginBottom: Size.Title.Margin.bottom
    },
    
    content: {
        padding: Size.Section.padding,
        backgroundColor: 'white',
        marginBottom: Size.Section.Margin.bottom
    },
    contentText: {
        fontSize: Size.Text.normal,
        color: 'gray',
        marginBottom: Size.Text.Margin.bottom
    },
    buttonAddToCart: {
        marginTop: -Size.Section.Margin.bottom,
        height: Size.Button.height,
        width: wp(100),
        justifyContent:'center'
    },
    gradientAddToCart: {
        height: Size.Button.height,
        width: wp(100),
        fontSize:Size.Button.textSize
    },
    miniProductImage:{
        height:sp(17),
        width:sp(15),
        position:'absolute',
        opacity:0.7,
        zIndex:200
    }
})