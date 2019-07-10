import {StyleSheet} from 'react-native'
import {Size,sp, hp,wp, SCREEN_HEIGHT} from '../../sizes'
import Color from '../../colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mr_2: {
        marginRight: Size.Section.Margin.right
    },
    sortAndFilter: {
        width: "100%",
        height: Size.Button.height,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: sp(20),
        alignItems: 'center',
        flexDirection: 'row',
    },
    item: {
        flexDirection: 'row',
        height: Size.Button.height,
        alignItems: 'center',
        paddingHorizontal: sp(3)
    },
    circleItem:{
        height:Size.Icon.height*0.3,
        width:Size.Icon.width*0.3
    },

    itemText: {
        fontSize: Size.Text.normal,
        marginLeft: sp(4)
    },
    product: {
        width: wp(50) - 4
    },
    productView: {
        height: sp(50),
        width: wp(50) - 4,
        backgroundColor: '#f7f7f7'
    },
    productBody: {
        padding: Size.Section.padding,
        backgroundColor: 'white'
    },
    productBrand: {
        fontSize: Size.Text.sectionTitle,
        marginBottom: Size.Text.Margin.bottom
    },
    productPrice: {
        flexDirection: 'row',
        marginBottom: Size.Text.Margin.bottom
    },
    price: {
        fontSize: Size.Text.normal,
        marginRight: Size.Text.Margin.right
    },
    priceRoot: {
        fontSize: Size.Text.normal*0.9,
        marginRight: Size.Text.Margin.right,
        textDecorationLine: 'line-through',
        color: "gray"
    },
    saleOff: {
        fontSize: Size.Text.normal*0.9,
        color: Color.primary
    },
    titleModalSort: {
        textAlign: 'center',
        marginVertical: sp(3),
        fontSize: Size.Text.pageTitle
    },
    devide: {
        width: "100%",
        borderWidth: 1,
        borderColor: '#eeeeee'
    },
    bodyModalSort: {
        maxHeight: hp(50)
    },
    buttonSortBy: {
        height: Size.Button.height,
        justifyContent: 'center'
    },
    sortByText: {
        fontSize: Size.Text.pageTitle,
        textAlign: 'center',
    },
    wrapModal: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        height: "100%",
        width: "100%"
    },
    modalSort: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        paddingBottom: Size.Section.padding,
        backgroundColor: 'white'
    },
    modalFilter: {
        flex: 1,
        backgroundColor: "white",
    },
    headerModalFilter: {
        padding: Size.Section.padding,
        height: Size.Button.height,
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleModalFilter: {
        marginLeft: Size.Text.normal,
        fontSize: Size.Text.pageTitle
    },
    buttonCancelModalFilter: {
        height:Size.Icon.height*0.7,
        width:Size.Icon.width*0.7
    },
    bodyModalFilter: {
        width: "100%",
        height: SCREEN_HEIGHT-2.5*Size.Button.height,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    listTag: {
        width: wp(35) - 1,
        height: "100%",
        borderRightWidth: 1,
        borderColor: '#eeeeee'
    },
    tagView: {
        height: Size.Button.height*1.2
    },
    buttonTag: {
        height: Size.Button.height*1.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTag: {
        fontSize: Size.Text.pageTitle
    },
    listFilter: {
        backgroundColor: "#e2e2e2",
        width: "100%"
    },
    filterView: {

    },
    filterButton: {
        paddingVertical: Size.Text.normal,
        justifyContent: 'center'
    },
    filterText: {
        fontSize: Size.Text.pageTitle,
        marginLeft: wp(3)
    },
    footerFilterModal: {
        backgroundColor: 'white',
        height: Size.Button.height,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
        elevation: 4
    },
    buttonFilter: {
        width: "46%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonFilter: {
        fontSize: Size.Button.textSize,
        textAlign: 'center'
    }
})