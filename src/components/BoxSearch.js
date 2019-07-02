import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacityBase } from 'react-native'
import { sp, WIDTH_SCREEN } from '../untils'
import Icons from '../icons'

export default class BoxSearch extends React.Component {
    render() {
        const {heightHeader}=this.props
        const sizeIcon=heightHeader*0.45

        return (
            <View style={styles.container}>
                <TextInput style={[styles.input,{fontSize:heightHeader*0.35}]} placeholder="Search for products" />
                <View style={{marginRight:sp(5)}}>
                    <Icons.ShoppingBag width={sizeIcon} height={sizeIcon} />
                </View>
                <Icons.Trash width={sizeIcon} height={sizeIcon} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: sp(3.5),
        width: WIDTH_SCREEN * 0.8
    },
    input: {
        marginRight: sp(3.5),
        width: WIDTH_SCREEN * 0.7
    }
})