import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { wp, sp ,WIDTH_SCREEN} from '../untils';

export default Banner = (props) => (
    <View style={styles.banner}>
        <View style={styles.backgroundBanner}>
            <Svgs.BackgroundCategory height={sp(30)} width={wp(100)} />
        </View>
        <View style={styles.contentBanner}>
            <Text style={styles.lageTextBanner}>Winter wear Special</Text>
            <Text style={styles.smallTextBanner}>20 - 50% off</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    banner: {
        height: sp(30),
        width: WIDTH_SCREEN,
    },
    backgroundBanner: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: sp(30),
        width: WIDTH_SCREEN
    },
    contentBanner: {
        height: sp(30),
        width: WIDTH_SCREEN,
        justifyContent: 'center'
    },
    lageTextBanner: {
        fontSize: sp(7),
        color: 'white',
        textAlign: 'center'
    },
    smallTextBanner: {
        fontSize: sp(5),
        color: 'white',
        textAlign: 'center'
    },
})