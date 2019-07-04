import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icons from '../icons'
import { Svg, Defs, Stop, Circle, LinearGradient } from 'react-native-svg'
import {sp} from '../utils'

const SIZE_BUTTON=sp(9)
export default class CheckDelivery extends React.Component {

    render() {
        return (
            <View style={[styles.checkDeliver,this.props.style]}>
                <Text style={styles.title}>Check Delivery and COD Options</Text>
                <View style={styles.wrapInputDeliver}>
                    <TextInput style={styles.inputDeliver} placeholder="Delivery" placeholderTextColor="#707070" />
                    <View style={styles.position}>
                        <Icons.Position height={sp(4)} width={sp(4)} fill="#707070" />
                    </View>

                    <View style={styles.buttonGradient}>
                        <View
                            style={styles.gradient}
                        >
                            <Svg
                                height={SIZE_BUTTON}
                                width={SIZE_BUTTON}
                            >
                                <Defs>
                                    <LinearGradient id="grad" x1={0} y1={0} x2={SIZE_BUTTON} y2={SIZE_BUTTON}>
                                        <Stop offset="0" stopColor="#00BBE1" stopOpacity="1" />
                                        <Stop offset="1" stopColor="#16fff3" stopOpacity="1" />
                                    </LinearGradient>
                                </Defs>
                                <Circle
                                    r={SIZE_BUTTON / 2}
                                    cx={SIZE_BUTTON / 2}
                                    cy={SIZE_BUTTON / 2}
                                    fill="url(#grad)" />
                            </Svg>
                        </View>
                        <Icons.ArrowRight height={SIZE_BUTTON * 0.5} width={SIZE_BUTTON * 0.5} fill="white" />
                    </View>
                </View>
                <Text style={styles.minText}>Free shipping on orders above Rs. 500*</Text>
                <Text style={styles.link}>
                    For more details read our Shipping Policy
                </Text>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    wrapInputDeliver: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        width: "100%",
        marginBottom: sp(2)
    },
    checkDeliver: {
        padding: sp(3.5),
        backgroundColor: "white",
        marginBottom: sp(1)
    },
    title: {
        fontSize: sp(4.5),
        marginBottom: sp(1.5)
    },
    inputDeliver: {
        height: sp(12),
        width: "100%",
        borderColor: "#e0e0e0",
        borderWidth: 1,
        borderRadius: sp(1),
        padding: 0,
        paddingLeft: sp(6),
        fontSize: sp(4.5),
        paddingRight: SIZE_BUTTON + sp(4.5)
    },
    position: {
        position: 'absolute',
        left:sp(1.5),
    },
    buttonGradient: {
        position: 'absolute',
        right: sp(4),
        justifyContent: 'center',
        alignItems: 'center',
        height: SIZE_BUTTON,
        width: SIZE_BUTTON,
    },
    gradient: {
        height: SIZE_BUTTON,
        width: SIZE_BUTTON,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    minText: {
        color: 'gray',
        fontSize: sp(3.4),
        marginBottom: sp(1.5)
    },
    link: {
        color: '#08D6CC',
        fontSize: sp(3.9),
        marginBottom: sp(2),
        textDecorationLine: 'underline'
    },
})