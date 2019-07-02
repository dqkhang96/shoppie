import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {  sp, WIDTH_SCREEN } from '../untils';
import Svgs from '../svgs'
export default Banner = (props) => (
    <View style={styles.banner}>
        <View style={styles.backgroundBanner}>
            <Svgs.BackgroundCategory height={WIDTH_SCREEN * 0.5 / 1.7} width={WIDTH_SCREEN} />
        </View>
        <View style={styles.contentBanner}>
            <Text style={styles.lageTextBanner}>Winter wear Special</Text>
            <Text style={styles.smallTextBanner}>20 - 50% off</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    banner: {
        height: WIDTH_SCREEN * 0.5 / 1.7,
        width: WIDTH_SCREEN,
        backgroundColor: 'red',
    },
    backgroundBanner: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: WIDTH_SCREEN * 0.5 / 1.7,
        width: WIDTH_SCREEN
    },
    contentBanner: {
        height: WIDTH_SCREEN * 0.5 / 1.7,
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