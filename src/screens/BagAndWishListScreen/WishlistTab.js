import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Wishlist from '../../components/Wishlist'
export default class WishlishTab extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Wishlist></Wishlist>
                    <Wishlist></Wishlist>
                    <Wishlist></Wishlist>
                </ScrollView>
            </View>
        )
    }
}