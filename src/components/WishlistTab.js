import React, { Component } from 'react'
import {View,Text} from 'react-native'
import WishlistComponent from './WishlistComponent'
export default class WishlistTab extends Component {
    render() {
        return (
            <View style={{flex :1}}>
                <WishlistComponent></WishlistComponent>
                <WishlistComponent></WishlistComponent>
            </View>
        )
    }
}
