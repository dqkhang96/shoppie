import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {sp} from '../theme/sizes'

export default AdvertisingPanel = (props) => (
    <View style={styles.adContainer}>
        <View style={styles.adContent}>

            <View style={styles.ad}>
                <View style={styles.bodyAd}>
                    <View style={[styles.itemAd, { backgroundColor: 'gray' }]} />
                    <View style={[styles.itemAd, { backgroundColor: '#eaeaea' }]} />
                </View>
            </View>
            <View style={styles.titleAd}>
                <Text style={styles.largeAdText}>Get Up To 50% Off!</Text>
                <Text style={styles.smallAdText}>Styles for Special Occasions</Text>
            </View>

        </View>
    </View>
)


const styles = StyleSheet.create({
    adContainer: {
        padding: sp(3.5),
        marginBottom: sp(2),
    },
    adContent: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: sp(1),
        justifyContent: 'center',
        alignItems: 'center'
    },

    bodyAd: {
        width: "100%",
        flexDirection: 'row'
    },
    itemAd: {
        width: "50%",
        height: sp(40)
    },
    titleAd: {
        backgroundColor: 'white',
        position: 'absolute',
        padding: sp(1.5),
        bottom: sp(4),
        alignItems: 'center',
        width: sp(80)
    },
    largeAdText: {
        fontSize: sp(5),
        textAlign: 'center',
        marginBottom: sp(1)
    },
    smallAdText: {
        fontSize: sp(3.5),
        color: 'gray',
        textAlign: 'center'
    },
})