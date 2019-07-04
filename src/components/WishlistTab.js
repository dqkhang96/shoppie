import React, { Component } from 'react'
import { View} from 'react-native'
import Wishlist from './Wishlist'
export default class WishlishTab extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Wishlist></Wishlist>
                <Wishlist></Wishlist>
            </View>
        )
    }
}