import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import BagTab from '../components/BagTab'

export default class BagAndWishListScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <BagTab/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee'
    }
})