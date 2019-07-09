import { StyleSheet } from 'react-native'
import { Size } from '../sizes'
import Color from '../colors';

const SIZE_BUTTON = Size.TextInput.height * 0.8

export default styles = StyleSheet.create({
    wrapInputDeliver: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        width: "100%",
        marginBottom: Size.Section.Margin.bottom
    },
    checkDeliver: {
        padding: Size.Section.padding,
        backgroundColor: "white",
        marginBottom: Size.Section.Margin.bottom
    },
    title: {
        fontSize: Size.Text.sectionTitle,
        marginBottom: Size.Text.Margin.bottom
    },
    inputDeliver: {
        height: Size.TextInput.height,
        width: "100%",
        borderColor: "#e0e0e0",
        borderWidth: 1,
        borderRadius: 5,
        padding: 0,
        paddingLeft: Size.Icon.height * 0.8 + 8,
        fontSize: Size.Text.normal,
        paddingRight: SIZE_BUTTON
    },
    position: {
        position: 'absolute',
        left: 5,
        height: Size.Icon.height * 0.8,
        width: Size.Icon.width * 0.8
    },
    buttonGradient: {
        position: 'absolute',
        right: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: SIZE_BUTTON,
        width: SIZE_BUTTON,
    },
    gradient: {
        height: SIZE_BUTTON,
        width: SIZE_BUTTON,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    minText: {
        color: 'gray',
        fontSize: Size.Text.normal * 0.9,
        marginBottom: Size.Text.Margin.bottom
    },
    link: {
        color: Color.Text.link,
        fontSize: Size.Text.link,
        marginBottom: Size.Text.Margin.bottom,
        textDecorationLine: 'underline'
    },
})