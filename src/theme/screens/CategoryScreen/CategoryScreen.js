import {StyleSheet} from 'react-native'
import {Size,sp ,wp} from '../../sizes'

export default styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    categoriesContainer: {
        padding: Size.Section.padding,
        marginBottom: Size.Section.Margin.bottom
    },
    categoryContent: {
        width: wp(33.33),
        justifyContent: 'center'
    },
    title: {
        fontSize:  Size.Text.sectionTitle,
        marginBottom: Size.Title.Margin.bottom
    },
    categoryImage: {
        height: wp(30),
        width: wp(30),
        backgroundColor: 'gray'
    },
    categoryLabel: {
        fontSize: Size.Text.normal,
        textAlign: 'center'
    },
    wardrobeContainer: {
        padding: Size.Section.padding,
        marginBottom: Size.Section.Margin.bottom
    },
    wardrobeContent: {
        width: "100%"
    },
    wardrobeView: {
        height: sp(40),
        width: sp(70) - 1,
        backgroundColor: "gray",
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wardrobeLabel: {
        fontSize: Size.Text.normal,
        color: "gray",
        width: sp(70),
        textAlign: 'center',
        marginTop: Size.Section.Margin.top,
        marginBottom: Size.Section.Margin.bottom
    },
    wardrobeItem: {
        width: sp(70),
        marginRight: sp(2)
    },
    hotBrandContainer: {
        padding: Size.Section.padding
    },
    titleHotBrand: {
        fontSize: Size.Text.pageTitle,
        textAlign: 'center',
        marginBottom: Size.Section.Margin.bottom
    },
    hotBrandItem: {
        width: wp(30),
        marginRight: (wp(100)-2*Size.Section.padding-3*wp(30))/2,
        marginBottom: Size.CategoryGrid.itemMargin
    },
    hotBrandView: {
        height: wp(30)-2,
        width: wp(30)-2,
        backgroundColor: "#eaeaea"
    },
    hotBrandName: {
        width: wp(30),
        textAlign: 'center',
        fontSize: Size.Text.normal,
        marginBottom: Size.Text.Margin.bottom,
        marginTop: wp(1)
    }
})