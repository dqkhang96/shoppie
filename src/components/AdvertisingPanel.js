import React from 'react'
import { View, Text } from 'react-native'
import styles from '../theme/components/AdvertisingPanel'

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


