import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { sp } from '../util'

export default BannerBrand = (props) => (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.image} />
        </View>
        <View style={styles.title}>
            <Text style={styles.largeText}>Get Up To 50% Off!</Text>
            <Text style={styles.smallText}>Styles for Special Occasions</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: sp(50),
        backgroundColor: "#EEEEEE",
        alignItems:'center'
    },
    image: {
        height: sp(50),
        width: "100%"
    },
    title: {
        backgroundColor: 'white',
        position: 'absolute',
        padding: sp(1.5),
        bottom: sp(4),
        alignItems: 'center',
        width: sp(80)
    },
    largeText: {
        fontSize: sp(5),
        textAlign: 'center',
        marginBottom: sp(1)
    },
    smallText: {
        fontSize: sp(3.5),
        color: 'gray',
        textAlign: 'center'
    },
})