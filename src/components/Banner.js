import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SCREEN_WIDTH} from '../theme/sizes';
import Svgs from '../../res/svgs'
import styles from '../theme/components/Banner'
export default Banner = (props) => (
    <View style={styles.banner}>
        <View style={styles.backgroundBanner}>
            <Svgs.BackgroundCategory height={SCREEN_WIDTH*0.5/1.7} width={SCREEN_WIDTH} />
        </View>
        <View style={styles.contentBanner}>
            <Text style={styles.lageTextBanner}>Winter wear Special</Text>
            <Text style={styles.smallTextBanner}>20 - 50% off</Text>
        </View>
    </View>
)

